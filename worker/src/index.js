// Entrega el número de WhatsApp solo a quien pasa el desafío de Turnstile.
// El número y la clave secreta viven como secrets del Worker, nunca en el repo ni en el HTML.

const HOSTS = ['tomasbanchio.com.ar', 'www.tomasbanchio.com.ar'];
const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });

const hostOf = (value) => {
  try {
    return new URL(value).hostname;
  } catch {
    return '';
  }
};

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return json({ error: 'method' }, 405, { Allow: 'POST' });
    if (!HOSTS.includes(hostOf(request.headers.get('Origin')))) return json({ error: 'origin' }, 403);

    let token;
    try {
      ({ token } = await request.json());
    } catch {
      token = undefined;
    }
    if (typeof token !== 'string' || token.length === 0 || token.length > 2048) {
      return json({ error: 'token' }, 400);
    }

    const form = new FormData();
    form.append('secret', env.TURNSTILE_SECRET);
    form.append('response', token);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) form.append('remoteip', ip);

    const result = await fetch(SITEVERIFY, { method: 'POST', body: form }).then((r) => r.json());
    if (!result.success || !HOSTS.includes(result.hostname)) return json({ error: 'challenge' }, 403);

    return json({ numero: env.WHATSAPP_NUMBER });
  },
};
