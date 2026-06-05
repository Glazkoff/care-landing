const THEME_STORAGE_KEY = "care-landing-theme";
const VALID_THEMES = ["aqua", "crystal", "warm"];

function getThemeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get("theme");
  return VALID_THEMES.includes(theme) ? theme : null;
}

function setTheme(theme, { persist = true, updateUrl = true } = {}) {
  const next = VALID_THEMES.includes(theme) ? theme : "aqua";
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
  const theme = fromUrl || (VALID_THEMES.includes(stored) ? stored : "aqua");
  setTheme(theme, { persist: !fromUrl, updateUrl: !fromUrl });

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.themeBtn));
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
  { role: "user", text: "> Собери агента для анализа финансовых отчётов" },
  { role: "tool", text: "▶ Analyzing domain…" },
  { role: "tool", text: "▶ Planning steps…" },
  { role: "tool", text: "✓ Describing steps" },
  { role: "tool", text: " ⎿ 4 steps · 2 tools · 1 skill" },
  { role: "tool", text: "▶ Running chain…" },
  { role: "assistant", text: "Агент готов: извлекает метрики из PDF и строит сводку." },
  { role: "tool", text: "✓ Saved chain `fin-report-agent`" },
  { role: "tool", text: "🧬 Evolution run `evo-7f3a` started" },
];

const DEMO_LINES_EN = [
  { role: "user", text: "> Build an agent to analyze financial reports" },
  { role: "tool", text: "▶ Analyzing domain…" },
  { role: "tool", text: "▶ Planning steps…" },
  { role: "tool", text: "✓ Describing steps" },
  { role: "tool", text: " ⎿ 4 steps · 2 tools · 1 skill" },
  { role: "tool", text: "▶ Running chain…" },
  { role: "assistant", text: "Agent ready: extracts metrics from PDFs and builds a summary." },
  { role: "tool", text: "✓ Saved chain `fin-report-agent`" },
  { role: "tool", text: "🧬 Evolution run `evo-7f3a` started" },
];

function getDemoLines() {
  return document.documentElement.lang === "ru" ? DEMO_LINES_RU : DEMO_LINES_EN;
}

function initTerminalDemo() {
  const output = document.querySelector(".terminal-output");
  const mascot = document.querySelector("#demo .mascot-stage");
  if (!output) return;

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = null;
  let timer = null;

  function setMascotMood(index) {
    if (!mascot) return;
    const mood = index < 3 ? "think" : index < 6 ? "work" : "success";
    mascot.dataset.mood = mood;
  }

  function reset() {
    output.innerHTML = "";
    lineIndex = 0;
    charIndex = 0;
    currentLine = null;
    if (mascot) mascot.dataset.mood = "idle";
  }

  function typeNextChar() {
    const lines = getDemoLines();
    if (lineIndex >= lines.length) {
      timer = setTimeout(() => {
        reset();
        timer = setTimeout(typeNextChar, 400);
      }, 3200);
      return;
    }

    const entry = lines[lineIndex];
    setMascotMood(lineIndex);

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
      timer = setTimeout(typeNextChar, entry.role === "tool" ? 18 : 28);
      return;
    }

    lineIndex += 1;
    currentLine = null;
    timer = setTimeout(typeNextChar, entry.role === "assistant" ? 500 : 260);
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
    { threshold: 0.35 }
  );

  const section = document.querySelector("#demo");
  if (section) observer.observe(section);
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
      const output = document.querySelector(".terminal-output");
      if (output) output.innerHTML = "";
    });
  });
});
