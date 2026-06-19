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
    btn.addEventListener("click", () => {
      const current = VALID_THEMES.includes(document.documentElement.dataset.theme)
        ? document.documentElement.dataset.theme
        : DEFAULT_THEME;
      setTheme(current === "warm" ? "crystal" : "warm");
    });
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
  { role: "tool", text: "✓ Цепочка CARL собрана · 3 шага" },
  { role: "tool", text: "▶ plan_extraction · llm · планирую…" },
  { role: "tool", text: "▶ extract_pdf_text · tool · читаю PDF…" },
  { role: "tool", text: "▶ normalise_financials · structured · структурирую…" },
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
  { role: "tool", text: "✓ CARL chain assembled · 3 steps" },
  { role: "tool", text: "▶ plan_extraction · llm · planning…" },
  { role: "tool", text: "▶ extract_pdf_text · tool · reading PDF…" },
  { role: "tool", text: "▶ normalise_financials · structured · structuring…" },
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

function initChainSteps() {
  const buttons = Array.from(document.querySelectorAll(".carl-step-btn"));
  if (!buttons.length) return;

  function closeAll(except) {
    buttons.forEach((btn) => {
      if (btn === except) return;
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("is-open");
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (panel) panel.hidden = true;
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const willOpen = btn.getAttribute("aria-expanded") !== "true";
      closeAll(btn);
      btn.setAttribute("aria-expanded", String(willOpen));
      btn.classList.toggle("is-open", willOpen);
      if (panel) panel.hidden = !willOpen;
    });
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

function initCursorOrb() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  const brandIcon = document.querySelector(".nav .brand-icon");
  if (!brandIcon) return;

  const orb = document.createElement("div");
  orb.className = "cursor-orb";
  orb.setAttribute("aria-hidden", "true");
  document.body.appendChild(orb);
  document.documentElement.classList.add("has-cursor-orb");

  const homePos = () => {
    const r = brandIcon.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };

  const target = homePos();
  const pos = { x: target.x, y: target.y };
  let following = false;
  let raf = null;

  const draw = () => {
    orb.style.transform =
      `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
  };
  draw();

  const tick = () => {
    pos.x += (target.x - pos.x) * 0.2;
    pos.y += (target.y - pos.y) * 0.2;
    draw();
    if (Math.hypot(target.x - pos.x, target.y - pos.y) > 0.5) {
      raf = requestAnimationFrame(tick);
    } else {
      pos.x = target.x;
      pos.y = target.y;
      draw();
      raf = null;
    }
  };
  const kick = () => {
    if (raf == null) raf = requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", (e) => {
    following = true;
    target.x = e.clientX;
    target.y = e.clientY;
    kick();
  });

  const goHome = () => {
    following = false;
    const h = homePos();
    target.x = h.x;
    target.y = h.y;
    kick();
  };

  document.documentElement.addEventListener("mouseleave", goHome);
  window.addEventListener("blur", goHome);
  window.addEventListener("resize", () => {
    if (!following) goHome();
  });
}

// Sum the per-frame delays in a GIF (no native "animation ended" event exists),
// so we know exactly when a one-shot GIF has played through once.
async function getGifDurationMs(url) {
  try {
    const buf = new Uint8Array(await (await fetch(url)).arrayBuffer());
    if (buf[0] !== 0x47 || buf[1] !== 0x49 || buf[2] !== 0x46) return null;
    let i = 13;
    const packed = buf[10];
    if (packed & 0x80) i += 3 * (1 << ((packed & 0x07) + 1));
    let total = 0;
    let guard = 0;
    while (i < buf.length && guard++ < 100000) {
      const b = buf[i];
      if (b === 0x21) {
        if (buf[i + 1] === 0xf9) total += (buf[i + 4] | (buf[i + 5] << 8)) * 10;
        i += 2;
        while (i < buf.length && buf[i] !== 0x00) i += buf[i] + 1;
        i += 1;
      } else if (b === 0x2c) {
        i += 9;
        const lp = buf[i];
        i += 1;
        if (lp & 0x80) i += 3 * (1 << ((lp & 0x07) + 1));
        i += 1;
        while (i < buf.length && buf[i] !== 0x00) i += buf[i] + 1;
        i += 1;
      } else if (b === 0x3b) {
        break;
      } else {
        i += 1;
      }
    }
    return total || null;
  } catch (e) {
    return null;
  }
}

// Easter egg: clicking the hero mascot snaps the idle loop back to its first frame
// and plays the jump animation once, then returns to the idle loop. The jump GIF is
// authored to open on the same first frame as the idle GIF, so the cut is seamless.
function initMascotEasterEgg() {
  const stage = document.querySelector(".mascot-stage--hero");
  const img = stage && stage.querySelector(".mascot-img");
  if (!img) return;

  const idleSrc = img.getAttribute("src");
  // Each clip is authored to open on the idle GIF's first frame, so the cut is
  // seamless. The fallback ms is refined from the real frame delays below.
  const variants = [
    { src: "assets/mascot_jump.gif?v=2", ms: 900 },
    { src: "assets/mascot_dance.gif", ms: 1170 },
    { src: "assets/mascot_five.gif", ms: 1170 },
    { src: "assets/mascot_kiss.gif", ms: 1170 },
  ];

  // Warm the cache so swaps are instant, and read each clip's real play length.
  variants.forEach((v) => {
    new Image().src = v.src;
    getGifDurationMs(v.src).then((ms) => {
      if (ms) v.ms = ms;
    });
  });

  let playing = false;
  let lastIndex = -1;
  stage.style.cursor = "pointer";

  stage.addEventListener("click", () => {
    if (playing) return;
    playing = true;

    // Pick a random clip, but never the same one twice in a row.
    let i = Math.floor(Math.random() * variants.length);
    while (variants.length > 1 && i === lastIndex) {
      i = Math.floor(Math.random() * variants.length);
    }
    lastIndex = i;
    const variant = variants[i];

    stage.dataset.mood = "idle"; // pause the hover wave so the clip reads cleanly
    img.src = variant.src;
    window.setTimeout(() => {
      img.src = idleSrc;
      stage.dataset.mood = stage.matches(":hover") ? "wave" : "idle";
      playing = false;
    }, variant.ms);
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

// Yandex Metrica goal + parameter tracking. Relies on window.__ymId (set by the
// inline counter snippet only when a real counter id is injected), so it is a
// no-op in local/preview builds that keep the __YM_COUNTER_ID__ placeholder.
// Goals sent (create matching JS-event goals in the Metrica dashboard to see
// them as conversions): docs_click, github_click, cta_click, install_copy,
// carl_step, theme_switch, lang_switch, pkg_switch, agent_switch,
// external_click, nav_click. Webvisor must also be enabled in the counter's
// settings UI for session recordings.
function initAnalytics() {
  const id = window.__ymId;
  if (!id || typeof window.ym !== "function") return;
  const ym = window.ym;
  const goal = (name, params) => {
    try {
      ym(id, "reachGoal", name, params);
    } catch (e) {}
  };

  // Record query parameters (utm_*, theme, lang, ref, …) as visit params.
  try {
    const sp = new URLSearchParams(window.location.search);
    const query = {};
    let has = false;
    sp.forEach((v, k) => {
      query[k] = v;
      has = true;
    });
    if (has) ym(id, "params", { query });
  } catch (e) {}

  document.addEventListener(
    "click",
    (e) => {
      const el = e.target.closest(
        "a, button, [data-theme-btn], [data-lang-btn], [data-pkg-btn], [data-agent-btn]"
      );
      if (!el) return;

      const copy = el.closest(".copy-btn");
      if (copy) return goal("install_copy", { cmd: copy.getAttribute("data-cmd") || "" });

      const step = el.closest(".carl-step-btn");
      if (step) return goal("carl_step", { step: step.getAttribute("aria-controls") || "" });

      if (el.hasAttribute("data-theme-btn")) return goal("theme_switch", { theme: el.getAttribute("data-theme-btn") });
      if (el.hasAttribute("data-lang-btn")) return goal("lang_switch", { lang: el.getAttribute("data-lang-btn") });
      if (el.hasAttribute("data-pkg-btn")) return goal("pkg_switch", { pkg: el.getAttribute("data-pkg-btn") });
      if (el.hasAttribute("data-agent-btn")) return goal("agent_switch", { agent: el.getAttribute("data-agent-btn") });

      const link = el.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const label = (link.textContent || "").trim().slice(0, 60);

      if (href.includes("care-docs")) return goal("docs_click", { href, label });
      if (href.includes("github.com")) return goal("github_click", { href, label });
      if (link.classList.contains("btn")) return goal("cta_click", { label, href });

      if (/^https?:\/\//i.test(href)) {
        let host = "";
        try {
          host = new URL(href, location.href).host;
        } catch (e) {}
        if (host && host !== location.host) return goal("external_click", { href, label });
      }

      if (href.charAt(0) === "#" && href.length > 1) return goal("nav_click", { section: href, label });
    },
    true
  );
}

function initFeedbackModal() {
  const FORM_SRC = "https://forms.yandex.ru/u/6a35070002848f66d7bf3d27?iframe=1";
  const FORM_URL = "https://forms.yandex.ru/u/6a35070002848f66d7bf3d27";
  const FORM_NAME = "ya-form-6a35070002848f66d7bf3d27";
  const modal = document.querySelector("[data-feedback-modal]");
  const body = document.querySelector("[data-feedback-body]");
  const openers = document.querySelectorAll("[data-feedback-open]");
  if (!modal || !body || !openers.length) return;

  let lastFocused = null;
  let builtLang = null;

  function buildContent() {
    const lang = document.documentElement.lang === "en" ? "en" : "ru";
    if (builtLang === lang && body.firstChild) return;
    body.innerHTML = "";

    const dict = window.CARE_I18N.TRANSLATIONS[lang];
    const iframe = document.createElement("iframe");
    iframe.src = FORM_SRC;
    iframe.title = dict["feedback.title"] || "Feedback";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("name", FORM_NAME);
    iframe.loading = "lazy";

    const fallback = document.createElement("a");
    fallback.className = "feedback-link feedback-fallback";
    fallback.href = FORM_URL;
    fallback.target = "_blank";
    fallback.rel = "noopener";
    fallback.textContent = dict["feedback.open"] || "Open feedback form";
    fallback.hidden = true;

    let loaded = false;
    const showFallback = () => {
      if (loaded) return;
      iframe.hidden = true;
      fallback.hidden = false;
    };
    iframe.addEventListener("load", () => {
      loaded = true;
    });
    iframe.addEventListener("error", showFallback);
    window.setTimeout(showFallback, 8000);

    body.appendChild(iframe);
    body.appendChild(fallback);
    builtLang = lang;
  }

  function open() {
    lastFocused = document.activeElement;
    buildContent();
    modal.hidden = false;
    document.body.classList.add("feedback-open");
    const closeBtn = modal.querySelector(".feedback-modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove("feedback-open");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  openers.forEach((btn) => btn.addEventListener("click", open));
  modal.querySelectorAll("[data-feedback-close]").forEach((el) => {
    el.addEventListener("click", close);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");
  initTheme();
  window.CARE_I18N.initI18n();
  initSwitch("data-pkg-btn", "data-pkg-panel", "care-landing-pkg");
  initSwitch("data-agent-btn", "data-agent-panel", "care-landing-agent");
  initSwitch("data-demo-view-btn", "data-demo-view-panel", null);
  initNav();
  initScrollReveal();
  initParticles();
  initTerminalDemo();
  initChainSteps();
  initChainReveal();
  initCopyButtons();
  initMascotHover();
  initMascotEasterEgg();
  initHeroParallax();
  initCursorOrb();
  initAnalytics();
  initFeedbackModal();

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
