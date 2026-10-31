(() => {
  const sections = Array.from(document.querySelectorAll("[data-page]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
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

  const PHOSPHORS = ["amber", "green", "red", "cyan"];

  const setPhosphor = (name) => {
    if (name === "amber") delete root.dataset.phosphor;
    else if (PHOSPHORS.includes(name)) root.dataset.phosphor = name;
    store.set("tui-phosphor", name);
  };

  const saved = store.get("tui-phosphor");
  if (saved) setPhosphor(saved);

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
    if (event.key === "c" || event.key === "C") {
      const current = PHOSPHORS.indexOf(root.dataset.phosphor || "amber");
      setPhosphor(PHOSPHORS[(current + 1) % PHOSPHORS.length]);
    }
  });

  markCurrent();
  window.addEventListener("scroll", markCurrent, { passive: true });
})();
