(() => {
  const pages = Array.from(document.querySelectorAll("[data-page]"));
  const byNumber = new Map(pages.map((p) => [Number(p.dataset.page), p]));
  const stamp = document.getElementById("pagina-actual");
  const subStamp = document.getElementById("subpagina-actual");
  const clockEl = document.getElementById("reloj");
  const aviso = document.getElementById("aviso");
  const form = document.getElementById("ir");
  const input = document.getElementById("pagina");
  const fastLinks = Array.from(document.querySelectorAll(".fast a"));
  const subs = Array.from(document.querySelectorAll("#subs600 .sub"));
  const subsBox = document.getElementById("subs600");
  const subsStamp = document.getElementById("stamp600");
  const subsCount = document.getElementById("count600");
  const holdBtn = document.getElementById("hold600");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let subpage = 1;
  let held = reduced.matches;
  let timer = 0;
  let visible = false;

  const clock = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${hh}:${mm}`;
    clockEl.dateTime = now.toISOString();
  };

  const showSub = (n) => {
    subpage = ((n - 1 + subs.length) % subs.length) + 1;
    subs.forEach((s) => {
      s.hidden = Number(s.dataset.sub) !== subpage;
    });
    subsStamp.textContent = `P600/${subpage}`;
    subsCount.textContent = `Subpágina ${subpage}/${subs.length}`;
    if (current && current.dataset.page === "600") stamp.textContent = "P600";
    if (current && current.dataset.page === "600") subStamp.textContent = String(subpage);
  };

  let current = null;

  const applyCurrent = (found) => {
    if (found === current) return;
    current = found;
    stamp.textContent = `P${found.dataset.page}`;
    subStamp.textContent = found.dataset.page === "600" ? String(subpage) : "1";
    for (const link of fastLinks) {
      const target = link.getAttribute("href").slice(1);
      if (target === found.id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  const setCurrent = () => {
    const line = 90;
    let found = pages[0];
    for (const page of pages) {
      if (page.getBoundingClientRect().top - line <= 0) found = page;
    }
    applyCurrent(found);
  };

  const go = (number) => {
    const page = byNumber.get(number);
    if (!page) {
      aviso.textContent = `Página ${number} no disponible`;
      window.setTimeout(() => {
        aviso.textContent = "";
      }, 4000);
      return;
    }
    aviso.textContent = "";
    page.scrollIntoView({ block: "start", behavior: reduced.matches ? "auto" : "smooth" });
    history.replaceState(null, "", `#${page.id}`);
    applyCurrent(page);
    input.value = "";
  };

  form.hidden = false;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const number = Number(input.value.trim());
    if (Number.isFinite(number)) go(number);
    else input.focus();
  });

  holdBtn.addEventListener("click", () => {
    held = !held;
    holdBtn.setAttribute("aria-pressed", String(held));
    holdBtn.textContent = held ? "Sigue" : "Pausa";
    clearInterval(timer);
    if (!held) timer = window.setInterval(next, 9000);
  });

  const next = () => {
    if (!visible || held) return;
    showSub(subpage + 1);
  };

  document.querySelectorAll("[data-sub-step]").forEach((btn) => {
    btn.addEventListener("click", () => showSub(subpage + Number(btn.dataset.subStep)));
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
      },
      { threshold: 0.25 },
    ).observe(subsBox);
  }

  try {
    const seen = Number(localStorage.getItem("tv-visitas") || "0") + 1;
    localStorage.setItem("tv-visitas", String(seen));
    document.getElementById("visitas").textContent = String(seen).padStart(4, "0");
  } catch (error) {
    document.getElementById("visitas").textContent = "n/d";
  }

  clock();
  window.setInterval(clock, 15000);
  applyCurrent(pages[0]);
  showSub(1);
  holdBtn.setAttribute("aria-pressed", String(held));
  holdBtn.textContent = held ? "Sigue" : "Pausa";
  if (!held) timer = window.setInterval(next, 9000);
  window.addEventListener("scroll", setCurrent, { passive: true });
  window.addEventListener("hashchange", setCurrent);
})();
