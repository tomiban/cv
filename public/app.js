(() => {
  const sections = Array.from(document.querySelectorAll("[data-page]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const clockEl = document.getElementById("reloj");
  const root = document.documentElement;
  const store = {
    get: (k) => {
      try {
        return localStorage.getItem(k);
      } catch (error) {
        return null;
      }
    },
    set: (k, v) => {
      try {
        localStorage.setItem(k, v);
      } catch (error) {
        return;
      }
    },
  };

  const clock = () => {
    const now = new Date();
    clockEl.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    clockEl.dateTime = now.toISOString();
  };

  const phosphor = store.get("tui-phosphor");
  if (phosphor === "green") root.dataset.phosphor = "green";

  const markCurrent = () => {
    const line = 120;
    let found = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top - line <= 0) found = section;
    }
    for (const link of navLinks) {
      if (link.dataset.nav === found.id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target instanceof HTMLElement && /^(INPUT|TEXTAREA)$/.test(target.tagName)) return;
    if (/^[1-6]$/.test(event.key)) {
      const section = document.getElementById(`p${event.key}`);
      if (section) {
        section.scrollIntoView({ block: "start" });
        history.replaceState(null, "", `#p${event.key}`);
      }
      return;
    }
    if (event.key === "g" || event.key === "G") {
      const next = root.dataset.phosphor === "green" ? "amber" : "green";
      if (next === "green") root.dataset.phosphor = "green";
      else delete root.dataset.phosphor;
      store.set("tui-phosphor", next);
    }
  });

  clock();
  window.setInterval(clock, 15000);
  markCurrent();
  window.addEventListener("scroll", markCurrent, { passive: true });
})();
