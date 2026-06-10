const TRANSLATIONS = {
  ru: {
    "meta.title": "CARE — Collaborative Agent Reasoning Ecosystem",
    "meta.description":
      "Опиши задачу — CARE сам соберёт, запустит и улучшит цепочку AI-агентов. TUI и CLI для генерации, запуска и эволюции CARL-цепочек.",

    "nav.how": "Как работает",
    "nav.benefits": "Преимущества",
    "nav.stack": "Стек",
    "nav.demo": "Демо",
    "nav.install": "Установка",
    "nav.github": "GitHub",

    "hero.badge": "Collaborative Agent Reasoning Ecosystem",
    "hero.title": "Опиши задачу — CARE сам соберёт, запустит и улучшит цепочку агентов",
    "hero.subtitle":
      "Textual-TUI и headless-CLI поверх MAGE, CARL и GigaEvo: генерация, запуск, хранение и эволюция агентов в одном рабочем пространстве.",
    "hero.cta.primary": "Начать сейчас",
    "hero.cta.secondary": "Смотреть демо",
    "hero.stat.screens": "экранов TUI",
    "hero.stat.modes": "режима работы",
    "hero.stat.modules": "модуля стека",
    "hero.scroll": "Листай вниз",
    "hero.bubble": "Привет! Я EVOC — соберу агента под твою задачу ✨",

    "marquee.1": "Генерация",
    "marquee.2": "Исполнение",
    "marquee.3": "Эволюция",
    "marquee.4": "Память",
    "marquee.5": "Рассуждение",
    "marquee.6": "Автоматизация",

    "pillars.title": "Один поток — от идеи до готового агента",
    "pillars.subtitle": "Три модуля берут на себя генерацию, запуск и эволюцию",
    "p1.tag": "Шаг 1 · Генерация",
    "p1.title": "MAGE собирает агента из твоих слов",
    "p1.desc": "Опиши цель — Mesh Agent Generation Engine разберёт домен, спланирует шаги и построит готовую CARL-цепочку.",
    "p2.tag": "Шаг 2 · Исполнение",
    "p2.title": "CARL запускает цепочку вживую",
    "p2.desc": "Sandbox-runtime исполняет шаги с потоковым прогрессом, токенами и изоляцией навыков — виден каждый шаг агента.",
    "p2.chip1": "Sandbox",
    "p2.chip2": "Live-токены",
    "p2.chip3": "Tools и Skills",
    "p3.tag": "Шаг 3 · Эволюция",
    "p3.title": "GigaEvo делает агента сильнее",
    "p3.desc": "Генетический алгоритм улучшает цепочку по Pareto-фронту и продвигает лучший вариант в stable.",
    "p3.chip1": "Genetic Algorithm",
    "p3.chip2": "Pareto-фронт",
    "p3.chip3": "Fitness ↑",
    "pillar.learn": "Подробнее в стеке",
    "pillar.demo": "Смотреть демо",

    "benefits.eyebrow": "Почему именно CARE",
    "benefits.title": "Агент, который собирает себя сам",
    "benefits.subtitle": "Меньше рутины, больше результата — уже с первого запуска",
    "benefits.b1.tag": "≈ 60 секунд",
    "benefits.b1.title": "Агент за минуту",
    "benefits.b1.desc": "Опиши цель словами — MAGE соберёт CARL-цепочку и запустит её примерно за минуту.",
    "benefits.b2.tag": "chain_id навсегда",
    "benefits.b2.title": "Ничего не теряется",
    "benefits.b2.desc": "Memory хранит цепочки с baseline и историей версий — повтори, сравни или откатись в один клик.",
    "benefits.b3.tag": "0 чёрных ящиков",
    "benefits.b3.title": "Видно каждый шаг",
    "benefits.b3.desc": "Live-токены, трейл стадий и изолированный sandbox — ты контролируешь каждое действие агента.",
    "benefits.b4.tag": "GA + Pareto",
    "benefits.b4.title": "Сегодня работает — завтра лучше",
    "benefits.b4.desc": "Эволюция улучшает агента поколение за поколением и продвигает лучший вариант в stable.",
    "benefits.b5.tag": "TUI + CLI",
    "benefits.b5.title": "Из терминала — в продакшен",
    "benefits.b5.desc": "Один и тот же CARE в TUI и в CI — автоматизируй агентов в пайплайнах без переписывания.",
    "benefits.b6.tag": "Open source",
    "benefits.b6.title": "Твой стек, твои правила",
    "benefits.b6.desc": "Свои tools и skills, поддержка MCP и ребрендинг одним токеном. Никакого вендор-лока.",

    "stack.title": "Четыре модуля под капотом",
    "stack.subtitle": "CARE — это интерфейс поверх всей экосистемы",
    "stack.mage.name": "MAGE",
    "stack.mage.role": "Генерация",
    "stack.mage.desc": "Mesh Agent Generation Engine: запрос → готовая CARL-цепочка.",
    "stack.carl.name": "CARL",
    "stack.carl.role": "Исполнение",
    "stack.carl.desc": "Collaborative Agent Reasoning Library: песочница для исполнения цепочек.",
    "stack.memory.name": "GigaEvo Memory",
    "stack.memory.role": "Хранение",
    "stack.memory.desc": "Сущности, библиотека, SSE-поток и граф версий.",
    "stack.platform.name": "GigaEvo Platform",
    "stack.platform.role": "Эволюция",
    "stack.platform.desc": "Генетический алгоритм над цепочками: отбор и продвижение лучших.",
    "stack.care.label": "CARE TUI / CLI",

    "demo.title": "Живой TUI",
    "demo.subtitle": "Чат в стиле Claude Code с трейлом стадий MAGE и CARL",
    "demo.mode": "Production",

    "install.title": "Установка за минуту",
    "install.subtitle": "Три команды — и CARE запущен. Без шага сборки.",
    "install.s1.title": "Синхронизируй зависимости",
    "install.s1.desc": "uv создаст окружение и поставит весь стек CARE.",
    "install.s2.title": "Запиши доступы к MAGE",
    "install.s2.desc": "care init создаст минимальный .env: base URL, API-ключ и модель.",
    "install.s3.title": "Запусти TUI",
    "install.s3.desc": "Откроется чат — опиши задачу и собери первого агента.",
    "install.copy": "Копировать",
    "install.copied": "Скопировано",
    "install.aside.title": "Что нужно",
    "install.req1": "Python 3.12+ и uv",
    "install.req2": "Доступ к MAGE-совместимой LLM",
    "install.req3": "Memory и Platform — опционально, для режима Production",
    "install.oneliner": "Одной строкой:",
    "install.docs": "Полная документация",

    "cta.title": "Готов собрать своего агента?",
    "cta.subtitle": "Запусти CARE за минуту: uv sync, care init, care.",
    "cta.primary": "Открыть GitHub",
    "cta.secondary": "Читать документацию",

    "contribute.eyebrow": "Open source",
    "contribute.title": "Развивай CARE вместе с нами",
    "contribute.subtitle": "CARE открыт для контрибьюторов: пул-реквесты, идеи и баг-репорты идут в дело.",
    "contribute.w1.title": "Форк и Pull Request",
    "contribute.w1.desc": "Возьми задачу, внеси правку и открой PR — мы ревьюим быстро.",
    "contribute.w2.title": "Good first issues",
    "contribute.w2.desc": "Начни с задач для новичков — мягкий вход в кодовую базу.",
    "contribute.w3.title": "Идеи и обсуждения",
    "contribute.w3.desc": "Предложи фичу или обсуди архитектуру в GitHub Discussions.",
    "contribute.repo": "Открыть репозиторий",
    "contribute.issues": "Все issues",

    "footer.tagline": "Collaborative Agent Reasoning Ecosystem",
    "footer.mascot": "Маскот EVOC · Evolution Care",
    "footer.brand": "Стилистика AIRI",
    "footer.docs": "Документация",
    "footer.arch": "Архитектура",
    "footer.contribute": "Контрибьютинг",
    "footer.copy": "© 2026 CARE. Open source.",

    "theme.warm": "Тёплая",
    "theme.dark": "Тёмная",
    "lang.ru": "RU",
    "lang.en": "EN",
  },
  en: {
    "meta.title": "CARE — Collaborative Agent Reasoning Ecosystem",
    "meta.description":
      "Describe a task — CARE builds, runs, and evolves an AI agent chain for you. A TUI and CLI for generating, running, and evolving CARL chains.",

    "nav.how": "How it works",
    "nav.benefits": "Benefits",
    "nav.stack": "Stack",
    "nav.demo": "Demo",
    "nav.install": "Install",
    "nav.github": "GitHub",

    "hero.badge": "Collaborative Agent Reasoning Ecosystem",
    "hero.title": "Describe a task — CARE builds, runs, and evolves your agent chain",
    "hero.subtitle":
      "A Textual TUI and headless CLI over MAGE, CARL, and GigaEvo: generate, run, store, and evolve agents in one workspace.",
    "hero.cta.primary": "Get started",
    "hero.cta.secondary": "Watch demo",
    "hero.stat.screens": "TUI screens",
    "hero.stat.modes": "work modes",
    "hero.stat.modules": "stack modules",
    "hero.scroll": "Scroll down",
    "hero.bubble": "Hi! I'm EVOC — I'll build an agent for your task ✨",

    "marquee.1": "Generation",
    "marquee.2": "Execution",
    "marquee.3": "Evolution",
    "marquee.4": "Memory",
    "marquee.5": "Reasoning",
    "marquee.6": "Automation",

    "pillars.title": "One flow — from idea to a working agent",
    "pillars.subtitle": "Three modules handle generation, execution, and evolution",
    "p1.tag": "Step 1 · Generation",
    "p1.title": "MAGE builds an agent from your words",
    "p1.desc": "Describe the goal — the Mesh Agent Generation Engine analyzes the domain, plans the steps, and builds a ready CARL chain.",
    "p2.tag": "Step 2 · Execution",
    "p2.title": "CARL runs the chain live",
    "p2.desc": "The sandbox runtime executes steps with streaming progress, tokens, and skill isolation — you see every step the agent takes.",
    "p2.chip1": "Sandbox",
    "p2.chip2": "Live tokens",
    "p2.chip3": "Tools & Skills",
    "p3.tag": "Step 3 · Evolution",
    "p3.title": "GigaEvo makes the agent stronger",
    "p3.desc": "A genetic algorithm evolves the chain along the Pareto front and promotes the best variant to stable.",
    "p3.chip1": "Genetic Algorithm",
    "p3.chip2": "Pareto front",
    "p3.chip3": "Fitness ↑",
    "pillar.learn": "More in the stack",
    "pillar.demo": "See the demo",

    "benefits.eyebrow": "Why CARE",
    "benefits.title": "An agent that builds itself",
    "benefits.subtitle": "Less routine, more results — from the very first run",
    "benefits.b1.tag": "≈ 60 seconds",
    "benefits.b1.title": "An agent in a minute",
    "benefits.b1.desc": "Describe the goal in words — MAGE assembles a CARL chain and runs it in about a minute.",
    "benefits.b2.tag": "chain_id forever",
    "benefits.b2.title": "Nothing gets lost",
    "benefits.b2.desc": "Memory keeps chains with a baseline and full version history — replay, compare, or roll back in one click.",
    "benefits.b3.tag": "0 black boxes",
    "benefits.b3.title": "See every step",
    "benefits.b3.desc": "Live tokens, a stage trail, and an isolated sandbox — you control every action the agent takes.",
    "benefits.b4.tag": "GA + Pareto",
    "benefits.b4.title": "Works today, better tomorrow",
    "benefits.b4.desc": "Evolution improves the agent generation after generation and promotes the best variant to stable.",
    "benefits.b5.tag": "TUI + CLI",
    "benefits.b5.title": "From terminal to production",
    "benefits.b5.desc": "The same CARE in the TUI and in CI — automate agents in pipelines without rewrites.",
    "benefits.b6.tag": "Open source",
    "benefits.b6.title": "Your stack, your rules",
    "benefits.b6.desc": "Your own tools and skills, MCP support, and rebranding via a single token. No vendor lock-in.",

    "stack.title": "Four modules under the hood",
    "stack.subtitle": "CARE is the interface on top of the whole ecosystem",
    "stack.mage.name": "MAGE",
    "stack.mage.role": "Generation",
    "stack.mage.desc": "Mesh Agent Generation Engine: query → a ready CARL chain.",
    "stack.carl.name": "CARL",
    "stack.carl.role": "Execution",
    "stack.carl.desc": "Collaborative Agent Reasoning Library: a sandbox runtime for chains.",
    "stack.memory.name": "GigaEvo Memory",
    "stack.memory.role": "Storage",
    "stack.memory.desc": "Entities, library, SSE stream, and a lineage graph.",
    "stack.platform.name": "GigaEvo Platform",
    "stack.platform.role": "Evolution",
    "stack.platform.desc": "A genetic algorithm over chains: select and promote the best.",
    "stack.care.label": "CARE TUI / CLI",

    "demo.title": "Live TUI",
    "demo.subtitle": "A Claude-Code-style chat with the MAGE and CARL stage trail",
    "demo.mode": "Production",

    "install.title": "Install in a minute",
    "install.subtitle": "Three commands and CARE is running. No build step.",
    "install.s1.title": "Sync dependencies",
    "install.s1.desc": "uv creates the environment and installs the whole CARE stack.",
    "install.s2.title": "Set up MAGE access",
    "install.s2.desc": "care init creates a minimal .env: base URL, API key, and model.",
    "install.s3.title": "Launch the TUI",
    "install.s3.desc": "The chat opens — describe a task and build your first agent.",
    "install.copy": "Copy",
    "install.copied": "Copied",
    "install.aside.title": "Requirements",
    "install.req1": "Python 3.12+ and uv",
    "install.req2": "Access to a MAGE-compatible LLM",
    "install.req3": "Memory and Platform — optional, for Production mode",
    "install.oneliner": "One-liner:",
    "install.docs": "Full documentation",

    "cta.title": "Ready to build your agent?",
    "cta.subtitle": "Launch CARE in a minute: uv sync, care init, care.",
    "cta.primary": "Open GitHub",
    "cta.secondary": "Read the docs",

    "contribute.eyebrow": "Open source",
    "contribute.title": "Build CARE with us",
    "contribute.subtitle": "CARE is open to contributors: pull requests, ideas, and bug reports all help.",
    "contribute.w1.title": "Fork & Pull Request",
    "contribute.w1.desc": "Grab a task, make a change, and open a PR — we review fast.",
    "contribute.w2.title": "Good first issues",
    "contribute.w2.desc": "Start with newcomer-friendly issues — a gentle way into the codebase.",
    "contribute.w3.title": "Ideas & discussions",
    "contribute.w3.desc": "Suggest a feature or discuss the architecture in GitHub Discussions.",
    "contribute.repo": "Open the repo",
    "contribute.issues": "All issues",

    "footer.tagline": "Collaborative Agent Reasoning Ecosystem",
    "footer.mascot": "Mascot EVOC · Evolution Care",
    "footer.brand": "AIRI aesthetic",
    "footer.docs": "Documentation",
    "footer.arch": "Architecture",
    "footer.contribute": "Contributing",
    "footer.copy": "© 2026 CARE. Open source.",

    "theme.warm": "Warm",
    "theme.dark": "Dark",
    "lang.ru": "RU",
    "lang.en": "EN",
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

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key]) el.setAttribute("title", dict[key]);
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
