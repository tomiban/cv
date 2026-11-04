// Botones de WhatsApp: el número no está en el HTML. Al tocar un botón, Turnstile comprueba que
// sea una persona (casi siempre sin interacción) y el Worker de /api/contacto devuelve el número.
// Si algo falla, el botón sigue a su href, que es un mailto.
(() => {
  const script = document.currentScript;
  const sitekey = script.dataset.sitekey;
  const text = script.dataset.text || '';
  const links = Array.from(document.querySelectorAll('[data-wa]'));
  if (!sitekey || links.length === 0) return;

  const box = document.createElement('div');
  box.className = 'ts-box';
  document.body.append(box);

  let api;
  const loadApi = () =>
    (api ??= new Promise((resolve, reject) => {
      window.onTurnstileLoad = () => resolve(window.turnstile);
      const tag = document.createElement('script');
      tag.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad';
      tag.async = true;
      tag.onerror = reject;
      document.head.append(tag);
    }));

  let widget;
  let pending;
  const getToken = async () => {
    const turnstile = await loadApi();
    return new Promise((resolve, reject) => {
      pending = { resolve, reject };
      if (widget === undefined) {
        widget = turnstile.render(box, {
          sitekey,
          appearance: 'interaction-only',
          execution: 'execute',
          language: 'es',
          callback: (token) => pending?.resolve(token),
          'error-callback': () => pending?.reject(new Error('turnstile')),
        });
      } else {
        turnstile.reset(widget);
      }
      turnstile.execute(widget);
    });
  };

  let numero;
  let busy = false;
  const open = async () => {
    if (!numero) {
      const token = await getToken();
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) throw new Error(`contacto ${res.status}`);
      ({ numero } = await res.json());
      if (!/^\d{8,15}$/.test(numero ?? '')) throw new Error('numero');
    }
    location.href = `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;
  };

  for (const link of links) {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      if (busy) return;
      busy = true;
      link.setAttribute('aria-busy', 'true');
      try {
        await open();
      } catch {
        location.href = link.href;
      } finally {
        busy = false;
        link.removeAttribute('aria-busy');
      }
    });
  }

  // se carga la API cuando la página quedó quieta, para que el primer toque no espere la red
  const warm = () => loadApi().catch(() => {});
  if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 3000 });
  else setTimeout(warm, 1500);
})();
