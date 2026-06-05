const TRANSLATIONS = {
  ru: {
    "meta.title": "CARE — Collaborative Agent Reasoning Ecosystem",
    "meta.description":
      "Опиши задачу — CARE сам соберёт, запустит и улучшит цепочку AI-агентов. TUI + CLI для генерации, исполнения и эволюции CARL-цепочек.",
    "nav.how": "Как работает",
    "nav.features": "Возможности",
    "nav.stack": "Стек",
    "nav.demo": "Демо",
    "nav.github": "GitHub",
    "hero.badge": "Collaborative Agent Reasoning Ecosystem",
    "hero.title": "Опиши задачу — CARE сам соберёт, запустит и улучшит цепочку агентов",
    "hero.subtitle":
      "Textual TUI и headless CLI поверх MAGE, CARL, GigaEvo Memory и Platform. Генерация, исполнение, сохранение и эволюция — в одном рабочем пространстве.",
    "hero.cta.primary": "Начать сейчас",
    "hero.cta.secondary": "Смотреть демо",
    "hero.stat.screens": "экранов TUI",
    "hero.stat.modes": "режима работы",
    "hero.stat.modules": "модуля стека",
    "how.title": "Как это работает",
    "how.subtitle": "От идеи до эволюционирующего агента — четыре шага",
    "how.step1.title": "Опиши задачу",
    "how.step1.desc": "Введи запрос на естественном языке в chat-поверхности CARE.",
    "how.step2.title": "MAGE генерирует",
    "how.step2.desc": "Mesh Agent Generation Engine собирает CARL-цепочку из шагов.",
    "how.step3.title": "CARL исполняет",
    "how.step3.desc": "Sandbox runtime запускает цепочку с live-прогрессом и токенами.",
    "how.step4.title": "GigaEvo эволюционирует",
    "how.step4.desc": "Genetic algorithm улучшает агента и продвигает лучшего в stable.",
    "features.title": "Возможности",
    "features.subtitle": "Всё, что нужно для полного жизненного цикла агентов",
    "features.f1.title": "NL → цепочки",
    "features.f1.desc": "Задача на естественном языке превращается в воспроизводимую CARL-цепочку.",
    "features.f2.title": "Ad-Hoc / Production",
    "features.f2.desc": "Быстрые эксперименты или сохранение в Memory с baseline и эволюцией.",
    "features.f3.title": "18+ экранов TUI",
    "features.f3.desc": "Library, Evolution, Catalog, Replay — полный lifecycle в терминале.",
    "features.f4.title": "Memory & Library",
    "features.f4.desc": "Цепочки, агенты и skills в GigaEvo Memory с поиском и lineage.",
    "features.f5.title": "Эволюция (GA)",
    "features.f5.desc": "Pareto-front, SSE-прогресс и accept-and-promote лучших индивидов.",
    "features.f6.title": "Изолированный sandbox",
    "features.f6.desc": "AgentSkill в local, Docker, e2b или firejail с network policy.",
    "stack.title": "Четырёхмодульный стек",
    "stack.subtitle": "CARE — consumer на вершине экосистемы",
    "stack.mage.name": "MAGE",
    "stack.mage.role": "Генерация",
    "stack.mage.desc": "Mesh Agent Generation Engine — query → CARL chain.",
    "stack.carl.name": "CARL",
    "stack.carl.role": "Исполнение",
    "stack.carl.desc": "Collaborative Agent Reasoning Library — sandbox runtime.",
    "stack.memory.name": "GigaEvo Memory",
    "stack.memory.role": "Персистентность",
    "stack.memory.desc": "Entities, library, SSE, lineage DAG.",
    "stack.platform.name": "GigaEvo Platform",
    "stack.platform.role": "Эволюция",
    "stack.platform.desc": "GA over chains, accept-and-promote.",
    "stack.care.label": "CARE TUI / CLI",
    "demo.title": "Живой TUI",
    "demo.subtitle": "Claude-Code-style chat с trail стадий MAGE и CARL",
    "demo.prompt": "Собери агента для анализа финансовых отчётов",
    "demo.mode": "Production",
    "cta.title": "Готовы собрать своего агента?",
    "cta.subtitle":
      "Запустите CARE за минуту: uv sync, care init, care. EVOC проведёт вас через весь путь.",
    "cta.primary": "Открыть GitHub",
    "cta.secondary": "Читать документацию",
    "footer.tagline": "Collaborative Agent Reasoning Ecosystem",
    "footer.mascot": "Маскот EVOC · Evolution Care",
    "footer.brand": "Стилистика AIRI",
    "footer.docs": "Документация",
    "footer.arch": "Архитектура",
    "footer.copy": "© 2026 CARE. Open source.",
    "theme.aqua": "Aqua Bloom",
    "theme.crystal": "Deep Crystal",
    "theme.warm": "Warm Sand",
    "lang.ru": "RU",
    "lang.en": "EN",
    "hero.scroll": "Листайте вниз",
    "hero.bubble": "Привет! Я EVOC — соберу агента под твою задачу ✨",
    "marquee.1": "Генерация",
    "marquee.2": "Исполнение",
    "marquee.3": "Эволюция",
    "marquee.4": "Память",
    "marquee.5": "Рассуждение",
    "marquee.6": "Автоматизация",
    "pillars.title": "Один поток — от идеи до живого агента",
    "pillars.subtitle": "Три модуля делают всю тяжёлую работу за тебя",
    "p1.tag": "Шаг 1 · Генерация",
    "p1.title": "MAGE собирает агента из твоих слов",
    "p1.desc": "Опиши цель — Mesh Agent Generation Engine проанализирует домен, спланирует шаги и построит готовую CARL-цепочку.",
    "p1.chip1": "Анализ домена",
    "p1.chip2": "План шагов",
    "p1.chip3": "DAG цепочки",
    "p2.tag": "Шаг 2 · Исполнение",
    "p2.title": "CARL запускает цепочку вживую",
    "p2.desc": "Sandbox runtime исполняет шаги с потоковым прогрессом, токенами и изоляцией навыков — виден каждый ход агента.",
    "p2.chip1": "Sandbox",
    "p2.chip2": "Live-токены",
    "p2.chip3": "Tools & Skills",
    "p3.tag": "Шаг 3 · Эволюция",
    "p3.title": "GigaEvo делает агента сильнее",
    "p3.desc": "Генетический алгоритм эволюционирует цепочку по Pareto-фронту и продвигает лучшего индивида в stable-канал.",
    "p3.chip1": "Genetic Algorithm",
    "p3.chip2": "Pareto-фронт",
    "p3.chip3": "Fitness ↑",
    "pillar.learn": "Подробнее в стеке",
  },
  en: {
    "meta.title": "CARE — Collaborative Agent Reasoning Ecosystem",
    "meta.description":
      "Describe a task — CARE builds, runs, and evolves an AI agent chain for you. TUI + CLI for generating, executing, and evolving CARL chains.",
    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.stack": "Stack",
    "nav.demo": "Demo",
    "nav.github": "GitHub",
    "hero.badge": "Collaborative Agent Reasoning Ecosystem",
    "hero.title": "Describe a task — CARE builds, runs, and evolves your agent chain",
    "hero.subtitle":
      "Textual TUI and headless CLI on top of MAGE, CARL, GigaEvo Memory, and Platform. Generate, execute, persist, and evolve — in one workspace.",
    "hero.cta.primary": "Get started",
    "hero.cta.secondary": "Watch demo",
    "hero.stat.screens": "TUI screens",
    "hero.stat.modes": "work modes",
    "hero.stat.modules": "stack modules",
    "how.title": "How it works",
    "how.subtitle": "From idea to evolving agent — four steps",
    "how.step1.title": "Describe",
    "how.step1.desc": "Type a natural-language task in CARE's chat surface.",
    "how.step2.title": "MAGE generates",
    "how.step2.desc": "Mesh Agent Generation Engine assembles a CARL chain.",
    "how.step3.title": "CARL executes",
    "how.step3.desc": "Sandbox runtime runs the chain with live progress and tokens.",
    "how.step4.title": "GigaEvo evolves",
    "how.step4.desc": "Genetic algorithm improves the agent and promotes the best to stable.",
    "features.title": "Features",
    "features.subtitle": "Everything for the full agent lifecycle",
    "features.f1.title": "NL → chains",
    "features.f1.desc": "A natural-language task becomes a reproducible CARL chain.",
    "features.f2.title": "Ad-Hoc / Production",
    "features.f2.desc": "Quick experiments or save to Memory with baseline and evolution.",
    "features.f3.title": "18+ TUI screens",
    "features.f3.desc": "Library, Evolution, Catalog, Replay — full lifecycle in the terminal.",
    "features.f4.title": "Memory & Library",
    "features.f4.desc": "Chains, agents, and skills in GigaEvo Memory with search and lineage.",
    "features.f5.title": "Evolution (GA)",
    "features.f5.desc": "Pareto front, SSE progress, and accept-and-promote best individuals.",
    "features.f6.title": "Isolated sandbox",
    "features.f6.desc": "AgentSkill in local, Docker, e2b, or firejail with network policy.",
    "stack.title": "Four-module stack",
    "stack.subtitle": "CARE — the consumer at the top of the ecosystem",
    "stack.mage.name": "MAGE",
    "stack.mage.role": "Generation",
    "stack.mage.desc": "Mesh Agent Generation Engine — query → CARL chain.",
    "stack.carl.name": "CARL",
    "stack.carl.role": "Execution",
    "stack.carl.desc": "Collaborative Agent Reasoning Library — sandbox runtime.",
    "stack.memory.name": "GigaEvo Memory",
    "stack.memory.role": "Persistence",
    "stack.memory.desc": "Entities, library, SSE, lineage DAG.",
    "stack.platform.name": "GigaEvo Platform",
    "stack.platform.role": "Evolution",
    "stack.platform.desc": "GA over chains, accept-and-promote.",
    "stack.care.label": "CARE TUI / CLI",
    "demo.title": "Live TUI",
    "demo.subtitle": "Claude-Code-style chat with MAGE and CARL stage trail",
    "demo.prompt": "Build an agent to analyze financial reports",
    "demo.mode": "Production",
    "cta.title": "Ready to build your agent?",
    "cta.subtitle":
      "Launch CARE in a minute: uv sync, care init, care. EVOC will guide you through the journey.",
    "cta.primary": "Open GitHub",
    "cta.secondary": "Read docs",
    "footer.tagline": "Collaborative Agent Reasoning Ecosystem",
    "footer.mascot": "Mascot EVOC · Evolution Care",
    "footer.brand": "AIRI aesthetic",
    "footer.docs": "Documentation",
    "footer.arch": "Architecture",
    "footer.copy": "© 2026 CARE. Open source.",
    "theme.aqua": "Aqua Bloom",
    "theme.crystal": "Deep Crystal",
    "theme.warm": "Warm Sand",
    "lang.ru": "RU",
    "lang.en": "EN",
    "hero.scroll": "Scroll to explore",
    "hero.bubble": "Hi! I'm EVOC — I'll build an agent for your task ✨",
    "marquee.1": "Generate",
    "marquee.2": "Execute",
    "marquee.3": "Evolve",
    "marquee.4": "Memory",
    "marquee.5": "Reasoning",
    "marquee.6": "Automation",
    "pillars.title": "One flow — from idea to a living agent",
    "pillars.subtitle": "Three modules do the heavy lifting for you",
    "p1.tag": "Step 1 · Generation",
    "p1.title": "MAGE builds an agent from your words",
    "p1.desc": "Describe the goal — the Mesh Agent Generation Engine analyzes the domain, plans the steps, and builds a ready CARL chain.",
    "p1.chip1": "Domain analysis",
    "p1.chip2": "Step plan",
    "p1.chip3": "Chain DAG",
    "p2.tag": "Step 2 · Execution",
    "p2.title": "CARL runs the chain live",
    "p2.desc": "The sandbox runtime executes steps with streaming progress, tokens, and skill isolation — you see every move the agent makes.",
    "p2.chip1": "Sandbox",
    "p2.chip2": "Live tokens",
    "p2.chip3": "Tools & Skills",
    "p3.tag": "Step 3 · Evolution",
    "p3.title": "GigaEvo makes the agent stronger",
    "p3.desc": "A genetic algorithm evolves the chain along the Pareto front and promotes the best individual to the stable channel.",
    "p3.chip1": "Genetic Algorithm",
    "p3.chip2": "Pareto front",
    "p3.chip3": "Fitness ↑",
    "pillar.learn": "More in the stack",
  },
};

const LANG_STORAGE_KEY = "care-landing-lang";

function detectLanguage() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === "ru" || stored === "en") return stored;
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("ru") ? "ru" : "en";
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const title = dict["meta.title"];
  const desc = dict["meta.description"];
  if (title) document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && desc) metaDesc.setAttribute("content", desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) ogTitle.setAttribute("content", title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && desc) ogDesc.setAttribute("content", desc);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
    btn.setAttribute("aria-pressed", btn.dataset.langBtn === lang ? "true" : "false");
  });
}

function setLanguage(lang) {
  const next = lang === "ru" ? "ru" : "en";
  localStorage.setItem(LANG_STORAGE_KEY, next);
  applyTranslations(next);
}

function initI18n() {
  const lang = detectLanguage();
  applyTranslations(lang);
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langBtn));
  });
}

window.CARE_I18N = { initI18n, setLanguage, applyTranslations, TRANSLATIONS };
