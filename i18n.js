const TRANSLATIONS = {
  ru: {
    "meta.title": "MAESTRO CARE — собери и запусти AI-агента из одного запроса",
    "meta.description":
      "Опиши задачу словами — MAESTRO CARE соберёт AI-агента, запустит его и сам улучшит результат. Открытый инструмент с интерфейсом в терминале (TUI и CLI).",

    "nav.how": "Как работает",
    "nav.benefits": "Преимущества",
    "nav.stack": "Стек",
    "nav.demo": "Демо",
    "nav.install": "Установка",
    "nav.github": "GitHub",
    "nav.docs": "Документация",

    "hero.badge": "Открытый инструмент для AI-агентов",
    "hero.title": "Опиши задачу — MAESTRO CARE сам соберёт, запустит и улучшит агента",
    "hero.subtitle":
      "Опиши цель словами — MAESTRO CARE соберёт агента, запустит его и будет улучшать результат. Без ручной настройки пайплайнов, прямо в терминале.",
    "hero.cta.primary": "Начать",
    "hero.cta.secondary": "Смотреть демо",
    "hero.cta.skill": "Добавить навык",
    "hero.stat1.label": "до первого агента",
    "hero.stat2.label": "один инструмент",
    "hero.stat3.label": "открытый код",
    "hero.scroll": "Листай вниз",
    "hero.bubble": "Привет! Я Maestric — покажу, как это работает 👋",

    "marquee.1": "Собери",
    "marquee.2": "Запусти",
    "marquee.3": "Эволюционируй",
    "marquee.4": "Сохрани",
    "marquee.5": "Повтори",
    "marquee.6": "Опиши",

    "pillars.title": "Один поток — от идеи до готового агента",
    "pillars.subtitle": "Генерация, запуск и эволюция — три шага одного потока",
    "p1.tag": "Шаг 1 · Генерация",
    "p1.title": "MAESTRO CARE собирает агента из твоих слов",
    "p1.desc": "Опиши цель — MAESTRO CARE разберёт задачу, спланирует шаги и построит готовую цепочку агента.",
    "p2.tag": "Шаг 2 · Запуск",
    "p2.title": "Агент работает у тебя на глазах",
    "p2.desc": "MAESTRO CARE запускает шаги в изолированной песочнице и показывает прогресс в реальном времени — виден каждый шаг агента.",
    "p2.chip1": "Песочница",
    "p2.chip2": "Поток токенов",
    "p2.chip3": "Инструменты и навыки",
    "p3.tag": "Шаг 3 · Эволюция",
    "p3.title": "Агент становится лучше сам",
    "p3.desc": "MAESTRO CARE перебирает варианты цепочки по нескольким метрикам и продвигает сильнейший в стабильную версию.",
    "p3.chip1": "Генетический алгоритм",
    "p3.chip2": "Несколько метрик",
    "p3.chip3": "Сильнейший вариант",
    "pillar.learn": "Подробнее в стеке",
    "pillar.demo": "Смотреть демо",

    "benefits.eyebrow": "Почему именно MAESTRO CARE",
    "benefits.title": "Ты описываешь — MAESTRO CARE делает остальное",
    "benefits.subtitle": "Конкретная польза на каждом этапе работы с агентом",
    "benefits.b1.tag": "Один запрос",
    "benefits.b1.title": "Агент за минуту",
    "benefits.b1.desc": "Опиши цель словами — MAESTRO CARE соберёт и запустит агента. Обычно это занимает около минуты.",
    "benefits.b2.tag": "История версий",
    "benefits.b2.title": "Ничего не теряется",
    "benefits.b2.desc": "MAESTRO CARE хранит каждую цепочку со всеми её версиями — повтори, сравни или откатись в один клик.",
    "benefits.b3.tag": "Прозрачно",
    "benefits.b3.title": "Видно каждый шаг",
    "benefits.b3.desc": "Видно, что и зачем делает агент: каждый шаг и результат в реальном времени, в изолированной песочнице.",
    "benefits.b4.tag": "Авто-улучшение",
    "benefits.b4.title": "Улучшается без ручной настройки",
    "benefits.b4.desc": "MAESTRO CARE сам перебирает варианты агента и оставляет тот, что работает лучше.",
    "benefits.b5.tag": "TUI + CLI",
    "benefits.b5.title": "Из терминала — в продакшен",
    "benefits.b5.desc": "Один и тот же MAESTRO CARE в интерактивном режиме и в CI — автоматизируй агентов в пайплайнах без переписывания.",
    "benefits.b6.tag": "Открытый код",
    "benefits.b6.title": "Твой стек, твои правила",
    "benefits.b6.desc": "Свои инструменты и навыки, подключение внешних сервисов и ребрендинг — без привязки к вендору.",

    "stack.title": "Что под капотом",
    "stack.subtitle": "MAESTRO CARE — экосистема для генерации и эволюции цепочек",
    "stack.mage.name": "Генерация",
    "stack.mage.role": "Сборка цепочки",
    "stack.mage.desc": "Превращает твой запрос в готовую цепочку агента.",
    "stack.carl.name": "CARL",
    "stack.carl.role": "Формат цепочек",
    "stack.carl.desc": "Документация по формату цепочек рассуждений.",
    "stack.memory.name": "Память",
    "stack.memory.role": "Хранение версий",
    "stack.memory.desc": "Хранит агентов, цепочки и все их версии.",
    "stack.platform.name": "Эволюция",
    "stack.platform.role": "Отбор лучших",
    "stack.platform.desc": "Улучшает цепочки и продвигает лучшие варианты.",
    "stack.care.label": "MAESTRO CARE",

    "demo.title": "Как выглядит работа в MAESTRO CARE",
    "demo.subtitle": "Прикладываешь документ — получаешь готовую цепочку CARL и структурный результат",
    "demo.mode": "Production",
    "demo.note": "Анимация интерфейса",
    "chain.title": "Итоговая цепочка",
    "chain.steps": "2 шага",
    "chain.task": "достать показатели из квартального PDF",
    "chain.p1": "Вход",
    "chain.p2": "Цепочка",
    "chain.p3": "Результат",
    "chain.query": "запрос пользователя",
    "chain.input": "вход",
    "chain.persist": "сохранение",
    "chain.result": "Результат · QuarterlyFinancials",
    "chain.saved": "💾 memory_card · fin-report",
    "chain.hint": "Нажмите на шаг — развернётся его топология CARL",
    "step.in": "вход",
    "step.out": "выход",
    "step.s1.desc": "Читает исходный PDF и возвращает текст и распознанные таблицы.",
    "step.s2.desc":
      "Приводит извлечённый текст к строгой схеме QuarterlyFinancials.",
    "install.title": "Установка за минуту",
    "install.subtitle": "Одна команда запускает мастер, который настроит всё за тебя.",
    "install.s1.title": "Запусти установщик",
    "install.s1.desc": "Мастер care-install склонирует репозитории, создаст .env и поднимет сервисы.",
    "install.uv.hint": "Нет uv?",
    "install.uv.link": "Как установить uv",
    "install.pip.hint": "Нет pipx?",
    "install.pip.link": "Как установить pipx",
    "install.s2.title": "Запусти MAESTRO CARE",
    "install.s2.desc": "Мастер добавит команду care в PATH — открой чат из любой директории.",
    "install.copy": "Копировать",
    "install.copied": "Скопировано",
    "install.aside.title": "Что нужно",
    "install.req1": "uv (для uvx) или pipx",
    "install.req2": "git в PATH",
    "install.req3": "Доступ к LLM с OpenAI-совместимым API",
    "install.req4": "Запущенный Docker — для локального запуска Memory и Platform",
    "install.req4link": "скачать Docker",
    "install.models.title": "Рекомендуемые модели",
    "install.models.list": "Qwen · GLM · Kimi",
    "install.oneliner": "Обновить до последней версии:",
    "install.docs": "Полная документация",

    "skill.eyebrow": "Агентный навык",
    "skill.title": "Или подключи как навык агента",
    "skill.subtitle": "Дай агенту управлять CARE CLI — Claude Code, Codex, Hermes или OpenClaw.",
    "skill.s1.title": "Скачай навык",
    "skill.s1.desc": "care-cli.skill — это бандл, который учит агента находить и запускать care.",
    "skill.s2.title": "Распакуй в свой агент",
    "skill.s2.desc": "Выбери агента — навык встанет в его каталог skills.",
    "skill.aside.title": "После установки",
    "skill.req1": "Нужна рабочая команда care (шаги выше)",
    "skill.req2": "Вызови /care-cli или опиши задачу словами",
    "skill.check": "Проверь навык:",
    "skill.docs": "Документация по навыку",

    "cta.title": "Готов собрать своего агента?",
    "cta.subtitle": "Поставь MAESTRO CARE и собери первого агента уже сегодня.",
    "cta.primary": "Открыть на GitHub",
    "cta.secondary": "Читать документацию",

    "team.eyebrow": "Команда",
    "team.title": "Кто делает MAESTRO CARE",
    "team.subtitle": "Исследователи AIRI, которые развивают проект",
    "team.m1.name": "Пчелин Константин Константинович",
    "team.m1.role": "Младший научный сотрудник AIRI",
    "team.m2.name": "Глазков Никита Олегович",
    "team.m2.role": "Младший научный сотрудник AIRI",
    "team.m3.name": "Волкова Ольга Алексеевна",
    "team.m3.role": "Младший научный сотрудник AIRI",
    "team.m4.name": "Беспалов Ярослав Радионович",
    "team.m4.role": "Научный сотрудник, руководитель группы «Мультимодальные архитектуры ИИ», AIRI",

    "footer.tagline": "Собери, запусти и улучши AI-агента из терминала",
    "footer.mascot": "MAESTRO CARE",
    "footer.docs": "Документация",
    "footer.arch": "Архитектура",
    "footer.team": "Команда",
    "footer.copy": "© 2026 MAESTRO CARE. Открытый код.",

    "theme.warm": "Тёплая",
    "theme.dark": "Тёмная",
    "lang.ru": "RU",
    "lang.en": "EN",
  },
  en: {
    "meta.title": "MAESTRO CARE — build and run an AI agent from a single prompt",
    "meta.description":
      "Describe a task in plain words — MAESTRO CARE builds an AI agent, runs it, and improves the result on its own. An open-source tool with a terminal interface (TUI and CLI).",

    "nav.how": "How it works",
    "nav.benefits": "Benefits",
    "nav.stack": "Stack",
    "nav.demo": "Demo",
    "nav.install": "Install",
    "nav.github": "GitHub",
    "nav.docs": "Documentation",

    "hero.badge": "Open-source toolkit for AI agents",
    "hero.title": "Describe a task — MAESTRO CARE builds, runs, and improves the agent",
    "hero.subtitle":
      "Describe the goal in plain words — MAESTRO CARE builds an agent, runs it, and keeps improving the result. No manual pipeline wiring, right in your terminal.",
    "hero.cta.primary": "Get started",
    "hero.cta.secondary": "Watch demo",
    "hero.cta.skill": "Add skill",
    "hero.stat1.label": "to your first agent",
    "hero.stat2.label": "one tool",
    "hero.stat3.label": "open source",
    "hero.scroll": "Scroll down",
    "hero.bubble": "Hi! I'm Maestric — let me show you how it works 👋",

    "marquee.1": "Build",
    "marquee.2": "Run",
    "marquee.3": "Evolve",
    "marquee.4": "Save",
    "marquee.5": "Repeat",
    "marquee.6": "Describe",

    "pillars.title": "One flow — from idea to a working agent",
    "pillars.subtitle": "Generation, execution, and evolution — three steps of one flow",
    "p1.tag": "Step 1 · Generation",
    "p1.title": "MAESTRO CARE builds an agent from your words",
    "p1.desc": "Describe the goal — MAESTRO CARE breaks down the task, plans the steps, and builds a ready agent chain.",
    "p2.tag": "Step 2 · Run",
    "p2.title": "The agent works in front of you",
    "p2.desc": "MAESTRO CARE runs the steps in an isolated sandbox and streams progress in real time — you see every step the agent takes.",
    "p2.chip1": "Sandbox",
    "p2.chip2": "Token stream",
    "p2.chip3": "Tools & skills",
    "p3.tag": "Step 3 · Evolution",
    "p3.title": "The agent gets better on its own",
    "p3.desc": "MAESTRO CARE searches chain variants across several metrics and promotes the strongest into the stable version.",
    "p3.chip1": "Genetic algorithm",
    "p3.chip2": "Several metrics",
    "p3.chip3": "Strongest variant",
    "pillar.learn": "More in the stack",
    "pillar.demo": "See the demo",

    "benefits.eyebrow": "Why MAESTRO CARE",
    "benefits.title": "You describe it — MAESTRO CARE does the rest",
    "benefits.subtitle": "Concrete value at every stage of working with an agent",
    "benefits.b1.tag": "One prompt",
    "benefits.b1.title": "An agent in a minute",
    "benefits.b1.desc": "Describe the goal in words — MAESTRO CARE builds and runs the agent. It usually takes about a minute.",
    "benefits.b2.tag": "Version history",
    "benefits.b2.title": "Nothing gets lost",
    "benefits.b2.desc": "MAESTRO CARE keeps every chain with all its versions — replay, compare, or roll back in one click.",
    "benefits.b3.tag": "Transparent",
    "benefits.b3.title": "See every step",
    "benefits.b3.desc": "You can see what the agent does and why: every step and result in real time, in an isolated sandbox.",
    "benefits.b4.tag": "Auto-improvement",
    "benefits.b4.title": "Improves without manual tuning",
    "benefits.b4.desc": "MAESTRO CARE searches agent variants on its own and keeps the one that works best.",
    "benefits.b5.tag": "TUI + CLI",
    "benefits.b5.title": "From terminal to production",
    "benefits.b5.desc": "The same MAESTRO CARE interactively and in CI — automate agents in pipelines without rewrites.",
    "benefits.b6.tag": "Open source",
    "benefits.b6.title": "Your stack, your rules",
    "benefits.b6.desc": "Your own tools and skills, external integrations, and rebranding — with no vendor lock-in.",

    "stack.title": "Under the hood",
    "stack.subtitle": "MAESTRO CARE — an ecosystem for generating and evolving chains",
    "stack.mage.name": "Generation",
    "stack.mage.role": "Chain assembly",
    "stack.mage.desc": "Turns your request into a ready agent chain.",
    "stack.carl.name": "CARL",
    "stack.carl.role": "Chain format",
    "stack.carl.desc": "Documentation for the reasoning-chain format.",
    "stack.memory.name": "Memory",
    "stack.memory.role": "Version storage",
    "stack.memory.desc": "Stores agents, chains, and all their versions.",
    "stack.platform.name": "Evolution",
    "stack.platform.role": "Best-of selection",
    "stack.platform.desc": "Improves chains and promotes the best variants.",
    "stack.care.label": "MAESTRO CARE",

    "demo.title": "What working in MAESTRO CARE looks like",
    "demo.subtitle": "Attach a document — get a ready CARL chain and a structured result",
    "demo.mode": "Production",
    "demo.note": "Interface animation",
    "chain.title": "Resulting chain",
    "chain.steps": "2 steps",
    "chain.task": "extract figures from a quarterly PDF",
    "chain.p1": "Input",
    "chain.p2": "Chain",
    "chain.p3": "Result",
    "chain.query": "user request",
    "chain.input": "input",
    "chain.persist": "persist",
    "chain.result": "Result · QuarterlyFinancials",
    "chain.saved": "💾 memory_card · fin-report",
    "chain.hint": "Click a step to expand its CARL topology",
    "step.in": "input",
    "step.out": "output",
    "step.s1.desc": "Reads the source PDF and returns plain text + parsed tables.",
    "step.s2.desc":
      "Coerces the extracted text into the strict QuarterlyFinancials schema.",
    "install.title": "Install in a minute",
    "install.subtitle": "One command launches a wizard that sets everything up for you.",
    "install.s1.title": "Run the installer",
    "install.s1.desc": "The care-install wizard clones the repos, writes .env, and brings services up.",
    "install.uv.hint": "No uv?",
    "install.uv.link": "How to install uv",
    "install.pip.hint": "No pipx?",
    "install.pip.link": "How to install pipx",
    "install.s2.title": "Launch MAESTRO CARE",
    "install.s2.desc": "The wizard adds a care command to your PATH — open the chat from any directory.",
    "install.copy": "Copy",
    "install.copied": "Copied",
    "install.aside.title": "Requirements",
    "install.req1": "uv (for uvx) or pipx",
    "install.req2": "git in PATH",
    "install.req3": "Access to an LLM with an OpenAI-compatible API",
    "install.req4": "A running Docker — to run Memory and Platform locally",
    "install.req4link": "get Docker",
    "install.models.title": "Recommended models",
    "install.models.list": "Qwen · GLM · Kimi",
    "install.oneliner": "Update to the latest version:",
    "install.docs": "Full documentation",

    "skill.eyebrow": "Agent Skill",
    "skill.title": "Or add it as an Agent Skill",
    "skill.subtitle": "Let your agent drive the CARE CLI — Claude Code, Codex, Hermes, or OpenClaw.",
    "skill.s1.title": "Download the skill",
    "skill.s1.desc": "care-cli.skill is a bundle that teaches an agent how to find and run care.",
    "skill.s2.title": "Unzip into your agent",
    "skill.s2.desc": "Pick your agent — the skill lands in its skills directory.",
    "skill.aside.title": "After install",
    "skill.req1": "Requires a working care command (steps above)",
    "skill.req2": "Invoke /care-cli or describe a task in words",
    "skill.check": "Check the skill:",
    "skill.docs": "Skill documentation",

    "cta.title": "Ready to build your agent?",
    "cta.subtitle": "Install MAESTRO CARE and build your first agent today.",
    "cta.primary": "Open on GitHub",
    "cta.secondary": "Read the docs",

    "team.eyebrow": "Team",
    "team.title": "The team behind MAESTRO CARE",
    "team.subtitle": "AIRI researchers building the project",
    "team.m1.name": "Konstantin Pchelin",
    "team.m1.role": "Junior Research Scientist, AIRI",
    "team.m2.name": "Nikita Glazkov",
    "team.m2.role": "Junior Research Scientist, AIRI",
    "team.m3.name": "Olga Volkova",
    "team.m3.role": "Junior Research Scientist, AIRI",
    "team.m4.name": "Yaroslav Bespalov",
    "team.m4.role": "Research Scientist, Head of the “Multimodal AI Architectures” group, AIRI",

    "footer.tagline": "Build, run, and improve an AI agent from your terminal",
    "footer.mascot": "MAESTRO CARE",
    "footer.docs": "Documentation",
    "footer.arch": "Architecture",
    "footer.team": "Team",
    "footer.copy": "© 2026 MAESTRO CARE. Open source.",

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
  // Default to Russian; users can switch to English (choice is remembered).
  return "ru";
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
