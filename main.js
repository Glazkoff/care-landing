const THEME_STORAGE_KEY = "care-landing-theme";
const VALID_THEMES = ["warm", "crystal"];
const DEFAULT_THEME = "warm";

function getThemeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get("theme");
  return VALID_THEMES.includes(theme) ? theme : null;
}

function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "crystal"
    : "warm";
}

function setTheme(theme, { persist = true, updateUrl = true } = {}) {
  const next = VALID_THEMES.includes(theme) ? theme : DEFAULT_THEME;
  document.documentElement.dataset.theme = next;

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    const active = btn.dataset.themeBtn === next;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (persist) localStorage.setItem(THEME_STORAGE_KEY, next);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("theme", next);
    window.history.replaceState({}, "", url);
  }
}

function initTheme() {
  const fromUrl = getThemeFromUrl();
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  const explicit = fromUrl || (VALID_THEMES.includes(stored) ? stored : null);
  const theme = explicit || getSystemTheme();
  setTheme(theme, { persist: Boolean(explicit), updateUrl: Boolean(explicit) });

  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const hasChoice =
          getThemeFromUrl() ||
          VALID_THEMES.includes(localStorage.getItem(THEME_STORAGE_KEY));
        if (!hasChoice) {
          setTheme(e.matches ? "crystal" : "warm", {
            persist: false,
            updateUrl: false,
          });
        }
      });
  }

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.themeBtn));
  });
}

function initSwitch(btnAttr, panelAttr, storageKey) {
  const buttons = Array.from(document.querySelectorAll(`[${btnAttr}]`));
  if (!buttons.length) return;
  const panels = Array.from(document.querySelectorAll(`[${panelAttr}]`));
  const values = buttons.map((b) => b.getAttribute(btnAttr));
  const fallback = values[0];

  function apply(value, persist) {
    const next = values.includes(value) ? value : fallback;
    buttons.forEach((b) => {
      const active = b.getAttribute(btnAttr) === next;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    panels.forEach((p) => {
      p.hidden = p.getAttribute(panelAttr) !== next;
    });
    if (persist && storageKey) localStorage.setItem(storageKey, next);
  }

  const stored = storageKey ? localStorage.getItem(storageKey) : null;
  apply(values.includes(stored) ? stored : fallback, false);

  buttons.forEach((b) => {
    b.addEventListener("click", () => apply(b.getAttribute(btnAttr), true));
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");
  if (prefersReduced) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    const closeMenu = () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
}

function initParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".mascot-particles").forEach((container) => {
    const count = 10;
    for (let i = 0; i < count; i += 1) {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.setProperty("--x", `${10 + Math.random() * 80}%`);
      p.style.setProperty("--delay", `${Math.random() * 4}s`);
      p.style.setProperty("--duration", `${3 + Math.random() * 4}s`);
      p.style.setProperty("--size", `${4 + Math.random() * 6}px`);
      container.appendChild(p);
    }
  });
}

function t(key) {
  const lang = document.documentElement.lang === "ru" ? "ru" : "en";
  const dict =
    (window.CARE_I18N && window.CARE_I18N.TRANSLATIONS[lang]) || {};
  return dict[key] || key;
}

const DEMO_LINES_RU = [
  { role: "user", text: "> Достань показатели из квартального отчёта" },
  { role: "tool", text: "📎 q3-report.pdf прикреплён" },
  { role: "tool", text: "▶ Анализирую задачу…" },
  { role: "tool", text: "▶ Планирую шаги…" },
  { role: "tool", text: "✓ Цепочка CARL собрана · 2 шага" },
  { role: "tool", text: "▶ extract_pdf_text · читаю PDF…" },
  { role: "tool", text: "▶ normalise_financials · структурирую…" },
  { role: "result", text: "✓ QuarterlyFinancials" },
  { role: "result", text: "  period: Q3 2025 · USD" },
  { role: "result", text: "  revenue: $4.20M · net income: $0.91M" },
  { role: "tool", text: "✓ Сохранено в Memory · chain `fin-report`" },
  { role: "tool", text: "🧬 Эволюция `evo-7f3a` запущена" },
];

const DEMO_LINES_EN = [
  { role: "user", text: "> Extract the headline figures from a quarterly report" },
  { role: "tool", text: "📎 q3-report.pdf attached" },
  { role: "tool", text: "▶ Analyzing task…" },
  { role: "tool", text: "▶ Planning steps…" },
  { role: "tool", text: "✓ CARL chain assembled · 2 steps" },
  { role: "tool", text: "▶ extract_pdf_text · reading PDF…" },
  { role: "tool", text: "▶ normalise_financials · structuring…" },
  { role: "result", text: "✓ QuarterlyFinancials" },
  { role: "result", text: "  period: Q3 2025 · USD" },
  { role: "result", text: "  revenue: $4.20M · net income: $0.91M" },
  { role: "tool", text: "✓ Saved to Memory · chain `fin-report`" },
  { role: "tool", text: "🧬 Evolution run `evo-7f3a` started" },
];

function getDemoLines() {
  return document.documentElement.lang === "ru" ? DEMO_LINES_RU : DEMO_LINES_EN;
}


function startTypewriter({
  output,
  getLines,
  section,
  onIndex,
  onReset,
  loopPause = 3200,
}) {
  if (!output || !section) return;

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = null;
  let timer = null;

  function reset() {
    output.innerHTML = "";
    lineIndex = 0;
    charIndex = 0;
    currentLine = null;
    if (onReset) onReset();
  }

  function typeNextChar() {
    const lines = getLines();
    if (lineIndex >= lines.length) {
      timer = setTimeout(() => {
        reset();
        timer = setTimeout(typeNextChar, 400);
      }, loopPause);
      return;
    }

    const entry = lines[lineIndex];
    if (onIndex) onIndex(lineIndex);

    if (!currentLine) {
      currentLine = document.createElement("div");
      currentLine.className = `terminal-line terminal-line--${entry.role}`;
      output.appendChild(currentLine);
      charIndex = 0;
    }

    if (charIndex < entry.text.length) {
      currentLine.textContent += entry.text[charIndex];
      charIndex += 1;
      output.scrollTop = output.scrollHeight;
      const fast = entry.role === "tool" || entry.role === "json";
      timer = setTimeout(typeNextChar, fast ? 15 : 24);
      return;
    }

    lineIndex += 1;
    currentLine = null;
    const slow =
      entry.role === "assistant" || entry.role === "result";
    timer = setTimeout(typeNextChar, slow ? 340 : 200);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!timer) typeNextChar();
        } else {
          clearTimeout(timer);
          timer = null;
          reset();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
}

function initTerminalDemo() {
  const output = document.querySelector(".terminal-output");
  const mascot = document.querySelector("#demo .mascot-stage");
  startTypewriter({
    output,
    getLines: getDemoLines,
    section: document.querySelector("#demo"),
    onIndex: (i) => {
      if (mascot) {
        mascot.dataset.mood = i < 4 ? "think" : i < 7 ? "work" : "success";
      }
    },
    onReset: () => {
      if (mascot) mascot.dataset.mood = "idle";
    },
  });
}


function initChainReveal() {
  const grid = document.querySelector(".benefits-grid");
  if (!grid) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    grid.classList.add("chain-anim");
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          grid.classList.add("chain-anim");
          observer.unobserve(grid);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(grid);
}

function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const cmd = btn.getAttribute("data-cmd") || "";
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(cmd);
        } else {
          const ta = document.createElement("textarea");
          ta.value = cmd;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        const label = btn.querySelector(".copy-label");
        const prev = label ? label.textContent : null;
        btn.classList.add("copied");
        if (label) label.textContent = t("install.copied");
        setTimeout(() => {
          btn.classList.remove("copied");
          if (label) label.textContent = prev || t("install.copy");
        }, 1400);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    });
  });
}

function initHeroParallax() {
  const hero = document.querySelector(".hero");
  const doodleLayer = document.querySelector("[data-parallax]");
  const mascot = document.querySelector("[data-parallax-mascot]");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  const doodles = doodleLayer ? Array.from(doodleLayer.querySelectorAll(".doodle")) : [];
  let raf = null;

  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;

    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      doodles.forEach((d) => {
        const depth = parseFloat(d.style.getPropertyValue("--depth")) || 0;
        d.style.translate = `${cx * depth}px ${cy * depth}px`;
      });
      if (mascot) {
        mascot.style.translate = `${cx * -14}px ${cy * -10}px`;
      }
    });
  });

  hero.addEventListener("pointerleave", () => {
    doodles.forEach((d) => { d.style.translate = "0 0"; });
    if (mascot) mascot.style.translate = "0 0";
  });
}

function initMascotHover() {
  const stage = document.querySelector(".hero-visual .mascot-stage");
  if (!stage) return;
  stage.addEventListener("mouseenter", () => {
    if (stage.dataset.mood === "idle") stage.dataset.mood = "wave";
  });
  stage.addEventListener("mouseleave", () => {
    if (stage.dataset.mood === "wave") stage.dataset.mood = "idle";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");
  initTheme();
  window.CARE_I18N.initI18n();
  initSwitch("data-pkg-btn", "data-pkg-panel", "care-landing-pkg");
  initSwitch("data-agent-btn", "data-agent-panel", "care-landing-agent");
  initNav();
  initScrollReveal();
  initParticles();
  initTerminalDemo();
  initChainReveal();
  initCopyButtons();
  initMascotHover();
  initHeroParallax();

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".terminal-output")
        .forEach((output) => {
          output.innerHTML = "";
        });
    });
  });
});
