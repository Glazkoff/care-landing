const TRANSLATIONS = {
  ru: {
    "meta.title": "MAESTRO — агентные цепочки из текстового запроса",
    "meta.description":
      "MAESTRO превращает текстовый запрос в агентную цепочку — запусти, открой по шагам, сохрани, переиспользуй и улучшай. Открытый код, TUI и CLI.",
    "nav.how": "Как работает",
    "nav.benefits": "Преимущества",
    "nav.stack": "Стек",
    "nav.demo": "Демо",
    "nav.install": "Установка",
    "nav.github": "GitHub",
    "nav.docs": "Документация",
    "hero.badge": "Открытый инструмент для цепочек рассуждений и действий",
    "hero.title": "MAESTRO делает вашего агента умнее",
    "hero.subtitle.detail":
      "За счёт цепочек рассуждений и действий — готовых к запуску, сохранению и эволюции прямо в вашем агенте.",
    "hero.cta.primary": "Смотреть пример",
    "hero.cta.secondary": "Установить",
    "hero.cta.skill": "Добавить как навык в кодинговый агент",
    "hero.stat1.value": "≈1 мин",
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
    "pillars.title": "Один поток — от запроса до исполняемой агентной цепочки",
    "pillars.subtitle": "Сборка цепочки, запуск и эволюция — три шага в одной цепочке",
    "p1.tag": "Шаг 1 · Генерация",
    "p1.title": "MAESTRO собирает агента из твоих слов",
    "p1.desc": "Опиши цель — MAESTRO разберёт задачу, спланирует шаги и построит готовую цепочку агента.",
    "p2.tag": "Шаг 2 · Запуск",
    "p2.title": "Агент работает у тебя на глазах",
    "p2.desc": "MAESTRO запускает шаги в изолированной песочнице и показывает прогресс в реальном времени — виден каждый шаг агента.",
    "p2.chip1": "Песочница",
    "p2.chip2": "Поток токенов",
    "p2.chip3": "Инструменты и навыки",
    "p3.tag": "Шаг 3 · Эволюция",
    "p3.title": "Агент становится лучше сам",
    "p3.desc": "MAESTRO перебирает варианты цепочки по нескольким метрикам и продвигает сильнейший в стабильную версию.",
    "p3.chip1": "Генетический алгоритм",
    "p3.chip2": "Несколько метрик",
    "p3.chip3": "Сильнейший вариант",
    "pillar.learn": "Подробнее в стеке",
    "pillar.demo": "Смотреть демо",
    "benefits.title": "Зачем агентная цепочка, а не один ответ в чате",
    "benefits.subtitle": "Конкретная польза на каждом этапе работы с агентной цепочкой",
    "benefits.b1.tag": "Один запрос",
    "benefits.b1.title": "Агент за минуту",
    "benefits.b1.desc": "Опиши цель словами — MAESTRO соберёт и запустит агента. Обычно это занимает около минуты.",
    "benefits.b2.tag": "История версий",
    "benefits.b2.title": "Ничего не теряется",
    "benefits.b2.desc": "MAESTRO хранит каждую цепочку со всеми её версиями — повтори, сравни или откатись в один клик.",
    "benefits.b3.tag": "Прозрачно",
    "benefits.b3.title": "Видно каждый шаг",
    "benefits.b3.desc": "Видно, что и зачем делает агент: каждый шаг и результат в реальном времени, в изолированной песочнице.",
    "benefits.b4.tag": "Авто-улучшение",
    "benefits.b4.title": "Автоулучшение цепочки",
    "benefits.b4.desc": "Не нужно менять промпт, MAESTRO пробует варианты цепочки и оставляет тот, что даёт лучший результат по метрикам.",
    "benefits.b5.tag": "TUI + CLI",
    "benefits.b5.title": "Из терминала — в продакшен",
    "benefits.b5.desc": "Один и тот же MAESTRO в интерактивном режиме и в CI — автоматизируй агентов в пайплайнах без переписывания.",
    "benefits.b6.tag": "Открытый код",
    "benefits.b6.title": "Твой стек, твои правила",
    "benefits.b6.desc": "Свои инструменты и навыки, подключение внешних сервисов и ребрендинг — без привязки к вендору.",
    "stack.title": "Что под капотом",
    "stack.subtitle": "MAESTRO — экосистема для генерации и эволюции цепочек",
    "stack.mage.name": "Генерация",
    "stack.mage.role": "Сборка цепочки",
    "stack.mage.desc": "Превращает твой запрос в готовую цепочку агента.",
    "stack.carl.name": "Формат цепочки",
    "stack.carl.role": "Агентные цепочки",
    "stack.carl.desc": "Как описаны шаги: цель, инструменты, результат.",
    "stack.memory.name": "Память",
    "stack.memory.role": "Хранение версий",
    "stack.memory.desc": "Хранит агентов, цепочки и все их версии.",
    "stack.platform.name": "Эволюция",
    "stack.platform.role": "Отбор лучших",
    "stack.platform.desc": "Улучшает цепочки и продвигает лучшие варианты.",
    "stack.care.label": "MAESTRO",
    "evolution.title": "Подробнее про эволюцию",
    "evolution.subtitle": "Цепочка улучшается сама — без ручной правки промптов",
    "evolution.s1.title": "Варианты",
    "evolution.s1.desc":
      "MAESTRO создаёт несколько версий цепочки — с разными шагами и формулировками.",
    "evolution.s2.title": "Метрики",
    "evolution.s2.desc":
      "Каждый вариант прогоняется на тестах — качество считается по нескольким метрикам.",
    "evolution.s3.title": "Отбор",
    "evolution.s3.desc":
      "Лучший вариант сохраняется как новая стабильная версия — готов к повторному запуску.",
    "evolution.example":
      "Пример: пресет Summarizer · 8 тестовых кейсов · метрика ROUGE-L",
    "evolution.metric.start": "Стартовый fitness",
    "evolution.metric.startHint": "исходная цепочка",
    "evolution.metric.best": "Лучший fitness",
    "evolution.metric.bestHint": "после 10 мутантов",
    "evolution.metric.rougeHint": "0.582 → 0.724",
    "evolution.metric.mutants": "Мутанты",
    "evolution.metric.mutantsHint": "оценено / бюджет",
    "evolution.before": "Было",
    "evolution.after": "Стало",
    "evolution.beforeSteps": "1 шаг",
    "evolution.afterSteps": "3 шага",
    "evolution.task": "сжать абзац в одно предложение",
    "evolution.inputSample": "абзац из eval.jsonl",
    "evolution.beforeResult": "одно предложение (часто теряет детали)",
    "evolution.afterResult": "точное предложение, совпадает с expected",
    "evolution.beforeFoot":
      "Один LLM-шаг: «прочитай и сожми в предложение» — ROUGE-L 0.582",
    "evolution.afterFoot": "Анализ → сжатие → проверка смысла — ROUGE-L 0.724",
    "evolution.arrow": "эволюция",
    "evolution.terminal.mode": "CLI",
    "evolution.terminal.logNote": "Запуск эволюции и отбор лучшего мутанта",
    "evolution.terminal.statusNote": "Статус прогона и кривая fitness в TUI",
    "demo.title": "Пример работы MAESTRO",
    "demo.subtitle": "PDF с отчётом → агентная цепочка из 3 шагов → таблица с цифрами.",
    "demo.mode": "Production",
    "demo.note": "Анимация интерфейса",
    "demo.view.chain": "Формат цепочки",
    "demo.view.terminal": "В терминале",
    "demo.terminal.caption1": "Сборка цепочки в режиме чата",
    "demo.terminal.caption2": "DAG цепочки и детали шага",
    "demo.terminal.alt1": "Скриншот MAESTRO TUI: генерация цепочки агента в чате",
    "demo.terminal.alt2": "Скриншот MAESTRO TUI: просмотр DAG и конфигурации шага",
    "chain.badge": "Формат цепочки",
    "chain.title": "Итоговая цепочка",
    "chain.steps": "3 шага",
    "chain.task": "достать показатели из квартального PDF",
    "chain.p1": "Вход",
    "chain.p2": "Цепочка",
    "chain.p3": "Результат",
    "chain.query": "запрос пользователя",
    "chain.input": "вход",
    "chain.persist": "сохранение",
    "chain.result": "Результат · QuarterlyFinancials",
    "chain.saved": "💾 memory_card · fin-report",
    "chain.hint": "Нажмите на шаг — развернётся его техническая структура",
    "step.in": "вход",
    "step.out": "выход",
    "step.s1.aim":
      "понять структуру отчёта и спланировать извлечение нужных показателей",
    "step.s1.sys":
      "Ты — аккуратный финансовый аналитик. Не выдумывай числа: опирайся только на текст отчёта.",
    "step.s1.stage":
      "определи разделы PDF и список метрик — выручка, чистая прибыль, расходы; зафиксируй валюту и отчётный период",
    "step.s1.rq":
      "Где в отчёте итоговые цифры? Какой период и валюта? Есть ли сноски о рисках или пересчётах?",
    "step.s1.ex":
      "напр.: строка «Revenue» в итоговой таблице → revenue; суммы в тыс. → перевести в абсолютные значения валюты",
    "step.s1.ctx1": "структура квартального отчёта",
    "step.s1.ctx2": "ключевые метрики P&L",
    "step.s1.ctx3": "валюта и отчётный период",
    "step.s2.aim":
      "извлечь из PDF чистый текст и таблицы для дальнейшей структуризации",
    "step.s2.desc":
      "читает исходный PDF и возвращает обычный текст и распознанные таблицы",
    "step.s3.aim":
      "привести извлечённый текст к строгой схеме QuarterlyFinancials",
    "step.s3.instruction":
      "распарсить текст в форму QuarterlyFinancials: числа — в единицах валюты, неуверенные поля пропускать, а не угадывать",
    "install.title": "Установка за минуту",
    "install.subtitle": "Одна команда запускает мастер, который настроит всё за тебя.",
    "install.s1.title": "Запусти установщик",
    "install.s1.desc": "Мастер maestro-install склонирует репозитории, создаст .env и поднимет сервисы.",
    "install.uv.hint": "Нет uv?",
    "install.uv.link": "Как установить uv",
    "install.pip.hint": "Нет pipx?",
    "install.pip.link": "Как установить pipx",
    "install.s2.title": "Запусти MAESTRO",
    "install.s2.desc": "Мастер добавит команду maestro в PATH — открой чат из любой директории.",
    "install.copy": "Копировать",
    "install.copied": "Скопировано",
    "install.aside.title": "Что нужно",
    "install.req1": "uv (для uvx) или pipx",
    "install.req2": "git в PATH",
    "install.req3": "Доступ к LLM с OpenAI-совместимым API",
    "install.req4": "Запущенный Docker — для локального запуска Memory и Platform",
    "install.req4link": "скачать Docker",
    "install.models.title": "Рекомендуемые модели",
    "install.models.list": "Qwen3-Coder · GLM-5.2 · Kimi 2.6",
    "install.models.tip": "Выбирай модель с уверенным tool-calling и контекстом от 32K — цепочки собираются стабильнее и выше по качеству.",
    "install.connectskill": "Подключить в Claude Code / Hermes / Codex / OpenClaw",
    "install.oneliner": "Обновить до последней версии:",
    "install.docs": "Полная документация",
    "skill.title": "Добавь MAESTRO как навык своему агенту",
    "skill.subtitle": "Дай агенту управлять MAESTRO CLI — Claude Code, Codex, Hermes или OpenClaw.",
    "skill.s1.title": "Установи навык",
    "skill.s1.desc": "Одна команда ставит навык в каталог skills твоего агента — Claude Code, Codex, Hermes или OpenClaw.",
    "skill.s2.title": "Используй в агенте",
    "skill.s2.desc": "Готово — вызови /maestro-cli или просто опиши задачу для MAESTRO: навык подхватится сам.",
    "skill.aside.title": "После установки",
    "skill.req1": "Нужна рабочая команда maestro (шаги выше)",
    "skill.req2": "Вызови /maestro-cli или опиши задачу словами",
    "skill.check": "Проверь навык:",
    "skill.docs": "Документация по навыку",
    "cta.title": "Попробуй MAESTRO на своём примере",
    "cta.subtitle": "Собери агентную цепочку под текстовый запрос уже сегодня.",
    "cta.primary": "Открыть на GitHub",
    "cta.secondary": "Читать документацию",
    "team.title": "Кто делает MAESTRO",
    "team.subtitle": "Исследователи AIRI, которые развивают проект",
    "team.m1.name": "Пчелин Константин Константинович",
    "team.m1.role": "Младший научный сотрудник AIRI",
    "team.m2.name": "Глазков Никита Олегович",
    "team.m2.role": "Младший научный сотрудник AIRI",
    "team.m3.name": "Волкова Ольга Алексеевна",
    "team.m3.role": "Младший научный сотрудник AIRI",
    "team.m4.name": "Беспалов Ярослав Радионович",
    "team.m4.role": "Научный сотрудник, руководитель группы «Мультимодальные архитектуры ИИ», AIRI",
    "team.m5.name": "Боков Алексей Александрович",
    "team.m5.role": "Инженер-исследователь",
    "team.m6.name": "Анохин Петр Константинович",
    "team.m6.role": "Ведущий научный сотрудник, руководитель группы",
    "team.m7.name": "Хрульков Валентин Андреевич",
    "team.m7.role": "Ведущий научный сотрудник, руководитель группы",
    "footer.tagline": "Собери, запусти и улучши агентную цепочку из терминала",
    "footer.mascot": "MAESTRO",
    "footer.airTitle": "AIRI",
    "footer.about": "Об институте",
    "footer.contacts": "Контакты",
    "footer.contact.events": "Для приглашений на мероприятия",
    "footer.contact.partner": "По вопросам научного сотрудничества и партнёрства",
    "footer.contact.pr": "Для журналистов и СМИ",
    "footer.careTitle": "MAESTRO",
    "footer.docs": "Документация",
    "footer.arch": "Архитектура",
    "footer.team": "Команда",
    "footer.copy": "© 2026 MAESTRO. Открытый код.",
    "feedback.button": "Обратная связь",
    "feedback.title": "Обратная связь",
    "feedback.close": "Закрыть",
    "feedback.open": "Открыть форму обратной связи",
    "theme.warm": "Тёплая",
    "theme.dark": "Тёмная",
    "lang.ru": "RU",
    "lang.en": "EN",
  },
  en: {
    "meta.title": "MAESTRO — agent chains from a text prompt",
    "meta.description":
      "MAESTRO turns a text prompt into an agent chain — launch it, inspect step by step, save, reuse, and evolve. Open source, TUI and CLI.",
    "nav.how": "How it works",
    "nav.benefits": "Benefits",
    "nav.stack": "Stack",
    "nav.demo": "Demo",
    "nav.install": "Install",
    "nav.github": "GitHub",
    "nav.docs": "Documentation",
    "hero.badge": "Open tool for reasoning and action chains",
    "hero.title": "MAESTRO makes your agent smarter",
    "hero.subtitle.detail":
      "Thanks to reasoning and action chains — ready to launch, save, and evolve right in your agent.",
    "hero.cta.primary": "See example",
    "hero.cta.secondary": "Install",
    "hero.cta.skill": "Add as skill to a coding agent",
    "hero.stat1.value": "≈1 min",
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
    "pillars.title": "One flow — from a prompt to an executable agent chain",
    "pillars.subtitle": "Chain assembly, execution, and evolution — three steps over one agent chain",
    "p1.tag": "Step 1 · Generation",
    "p1.title": "MAESTRO builds an agent from your words",
    "p1.desc": "Describe the goal — MAESTRO breaks down the task, plans the steps, and builds a ready agent chain.",
    "p2.tag": "Step 2 · Run",
    "p2.title": "The agent works in front of you",
    "p2.desc": "MAESTRO runs the steps in an isolated sandbox and streams progress in real time — you see every step the agent takes.",
    "p2.chip1": "Sandbox",
    "p2.chip2": "Token stream",
    "p2.chip3": "Tools & skills",
    "p3.tag": "Step 3 · Evolution",
    "p3.title": "The agent gets better on its own",
    "p3.desc": "MAESTRO searches chain variants across several metrics and promotes the strongest into the stable version.",
    "p3.chip1": "Genetic algorithm",
    "p3.chip2": "Several metrics",
    "p3.chip3": "Strongest variant",
    "pillar.learn": "More in the stack",
    "pillar.demo": "See the demo",
    "benefits.title": "Why an agent chain, not a one-off chat reply",
    "benefits.subtitle": "Concrete value at every stage of working with an agent chain",
    "benefits.b1.tag": "One prompt",
    "benefits.b1.title": "An agent in a minute",
    "benefits.b1.desc": "Describe the goal in words — MAESTRO builds and runs the agent. It usually takes about a minute.",
    "benefits.b2.tag": "Version history",
    "benefits.b2.title": "Nothing gets lost",
    "benefits.b2.desc": "MAESTRO keeps every chain with all its versions — replay, compare, or roll back in one click.",
    "benefits.b3.tag": "Transparent",
    "benefits.b3.title": "See every step",
    "benefits.b3.desc": "You can see what the agent does and why: every step and result in real time, in an isolated sandbox.",
    "benefits.b4.tag": "Auto-improvement",
    "benefits.b4.title": "Chain auto-improvement",
    "benefits.b4.desc": "No need to change the prompt — MAESTRO tries chain variants and keeps the one that scores best on metrics.",
    "benefits.b5.tag": "TUI + CLI",
    "benefits.b5.title": "From terminal to production",
    "benefits.b5.desc": "The same MAESTRO interactively and in CI — automate agents in pipelines without rewrites.",
    "benefits.b6.tag": "Open source",
    "benefits.b6.title": "Your stack, your rules",
    "benefits.b6.desc": "Your own tools and skills, external integrations, and rebranding — with no vendor lock-in.",
    "stack.title": "Under the hood",
    "stack.subtitle": "MAESTRO — an ecosystem for generating and evolving chains",
    "stack.mage.name": "Generation",
    "stack.mage.role": "Chain assembly",
    "stack.mage.desc": "Turns your request into a ready agent chain.",
    "stack.carl.name": "Chain format",
    "stack.carl.role": "Agent chains",
    "stack.carl.desc": "How steps are defined: goal, tools, output.",
    "stack.memory.name": "Memory",
    "stack.memory.role": "Version storage",
    "stack.memory.desc": "Stores agents, chains, and all their versions.",
    "stack.platform.name": "Evolution",
    "stack.platform.role": "Best-of selection",
    "stack.platform.desc": "Improves chains and promotes the best variants.",
    "stack.care.label": "MAESTRO",
    "evolution.title": "More about evolution",
    "evolution.subtitle": "The chain improves on its own — no manual prompt edits",
    "evolution.s1.title": "Variants",
    "evolution.s1.desc":
      "MAESTRO spawns several chain versions — different steps and wording.",
    "evolution.s2.title": "Metrics",
    "evolution.s2.desc":
      "Each variant runs on test cases — quality is scored across several metrics.",
    "evolution.s3.title": "Selection",
    "evolution.s3.desc":
      "The strongest variant is saved as the new stable version — ready to run again.",
    "evolution.example":
      "Example: Summarizer preset · 8 test cases · ROUGE-L metric",
    "evolution.metric.start": "Start fitness",
    "evolution.metric.startHint": "seed chain",
    "evolution.metric.best": "Best fitness",
    "evolution.metric.bestHint": "after 10 mutants",
    "evolution.metric.rougeHint": "0.582 → 0.724",
    "evolution.metric.mutants": "Mutants",
    "evolution.metric.mutantsHint": "evaluated / budget",
    "evolution.before": "Before",
    "evolution.after": "After",
    "evolution.beforeSteps": "1 step",
    "evolution.afterSteps": "3 steps",
    "evolution.task": "compress a paragraph into one sentence",
    "evolution.inputSample": "paragraph from eval.jsonl",
    "evolution.beforeResult": "one sentence (often loses detail)",
    "evolution.afterResult": "precise sentence matching expected",
    "evolution.beforeFoot":
      "Single LLM step: “read and compress to one sentence” — ROUGE-L 0.582",
    "evolution.afterFoot": "Analyze → compress → verify meaning — ROUGE-L 0.724",
    "evolution.arrow": "evolution",
    "evolution.terminal.mode": "CLI",
    "evolution.terminal.logNote": "Launching evolution and picking the best mutant",
    "evolution.terminal.statusNote": "Run status and fitness curve in the TUI",
    "demo.title": "MAESTRO in action",
    "demo.subtitle": "Quarterly PDF → 3-step agent chain → table of figures.",
    "demo.mode": "Production",
    "demo.note": "Interface animation",
    "demo.view.chain": "Chain format",
    "demo.view.terminal": "In the terminal",
    "demo.terminal.caption1": "Building a chain in chat mode",
    "demo.terminal.caption2": "Chain DAG and step details",
    "demo.terminal.alt1": "MAESTRO TUI screenshot: agent chain generation in chat",
    "demo.terminal.alt2": "MAESTRO TUI screenshot: DAG view and step configuration",
    "chain.badge": "Agent chain format",
    "chain.title": "Resulting chain",
    "chain.steps": "3 steps",
    "chain.task": "extract figures from a quarterly PDF",
    "chain.p1": "Input",
    "chain.p2": "Chain",
    "chain.p3": "Result",
    "chain.query": "user request",
    "chain.input": "input",
    "chain.persist": "persist",
    "chain.result": "Result · QuarterlyFinancials",
    "chain.saved": "💾 memory_card · fin-report",
    "chain.hint": "Click a step to expand its technical structure",
    "step.in": "input",
    "step.out": "output",
    "step.s1.aim":
      "understand the report layout and plan which figures to extract",
    "step.s1.sys":
      "You are a careful financial analyst. Never invent numbers — rely only on the report text.",
    "step.s1.stage":
      "map the PDF sections and the metric list — revenue, net income, expenses; pin down the currency and reporting period",
    "step.s1.rq":
      "Where are the headline figures? What period and currency? Any footnotes on risks or restatements?",
    "step.s1.ex":
      "e.g. the 'Revenue' line in the summary table → revenue; figures in thousands → convert to absolute currency values",
    "step.s1.ctx1": "quarterly report structure",
    "step.s1.ctx2": "key P&L metrics",
    "step.s1.ctx3": "currency and reporting period",
    "step.s2.aim":
      "extract clean text and tables from the PDF for downstream structuring",
    "step.s2.desc":
      "reads the source PDF and returns plain text plus parsed tables",
    "step.s3.aim":
      "coerce the extracted text into the strict QuarterlyFinancials schema",
    "step.s3.instruction":
      "parse the text into the QuarterlyFinancials shape: raw values in currency units, omit uncertain fields rather than guessing",
    "install.title": "Install in a minute",
    "install.subtitle": "One command launches a wizard that sets everything up for you.",
    "install.s1.title": "Run the installer",
    "install.s1.desc": "The maestro-install wizard clones the repos, writes .env, and brings services up.",
    "install.uv.hint": "No uv?",
    "install.uv.link": "How to install uv",
    "install.pip.hint": "No pipx?",
    "install.pip.link": "How to install pipx",
    "install.s2.title": "Launch MAESTRO",
    "install.s2.desc": "The wizard adds a maestro command to your PATH — open the chat from any directory.",
    "install.copy": "Copy",
    "install.copied": "Copied",
    "install.aside.title": "Requirements",
    "install.req1": "uv (for uvx) or pipx",
    "install.req2": "git in PATH",
    "install.req3": "Access to an LLM with an OpenAI-compatible API",
    "install.req4": "A running Docker — to run Memory and Platform locally",
    "install.req4link": "get Docker",
    "install.models.title": "Recommended models",
    "install.models.list": "Qwen3-Coder · GLM-5.2 · Kimi 2.6",
    "install.models.tip": "Pick a model with solid tool-calling and a 32K+ context — chains come out more stable and higher quality.",
    "install.connectskill": "Connect in Claude Code / Hermes / Codex / OpenClaw",
    "install.oneliner": "Update to the latest version:",
    "install.docs": "Full documentation",
    "skill.title": "Add MAESTRO as a skill to your agent",
    "skill.subtitle": "Let your agent drive the MAESTRO CLI — Claude Code, Codex, Hermes, or OpenClaw.",
    "skill.s1.title": "Install the skill",
    "skill.s1.desc": "One command drops the skill into your agent's skills directory — Claude Code, Codex, Hermes, or OpenClaw.",
    "skill.s2.title": "Use it in your agent",
    "skill.s2.desc": "Done — invoke /maestro-cli or just describe a MAESTRO task; the skill triggers itself.",
    "skill.aside.title": "After install",
    "skill.req1": "Requires a working maestro command (steps above)",
    "skill.req2": "Invoke /maestro-cli or describe a task in words",
    "skill.check": "Check the skill:",
    "skill.docs": "Skill documentation",
    "cta.title": "Try MAESTRO on your own example",
    "cta.subtitle": "Build an agent chain from a text prompt today.",
    "cta.primary": "Open on GitHub",
    "cta.secondary": "Read the docs",
    "team.title": "The team behind MAESTRO",
    "team.subtitle": "AIRI researchers building the project",
    "team.m1.name": "Konstantin Pchelin",
    "team.m1.role": "Junior Research Scientist, AIRI",
    "team.m2.name": "Nikita Glazkov",
    "team.m2.role": "Junior Research Scientist, AIRI",
    "team.m3.name": "Olga Volkova",
    "team.m3.role": "Junior Research Scientist, AIRI",
    "team.m4.name": "Yaroslav Bespalov",
    "team.m4.role": "Research Scientist, Head of the “Multimodal AI Architectures” group, AIRI",
    "team.m5.name": "Alexey Bokov",
    "team.m5.role": "Research engineer",
    "team.m6.name": "Pyotr Anokhin",
    "team.m6.role": "Principal Research Scientist, Research manager",
    "team.m7.name": "Valentin Khrulkov",
    "team.m7.role": "Principal Research Scientist, Research manager",
    "footer.tagline": "Build, run, and improve a agent chain from your terminal",
    "footer.mascot": "MAESTRO",
    "footer.airTitle": "AIRI",
    "footer.about": "About the institute",
    "footer.contacts": "Contacts",
    "footer.contact.events": "For event invitations",
    "footer.contact.partner": "For scientific cooperation and partnership",
    "footer.contact.pr": "For journalists and media",
    "footer.careTitle": "MAESTRO",
    "footer.docs": "Documentation",
    "footer.arch": "Architecture",
    "footer.team": "Team",
    "footer.copy": "© 2026 MAESTRO. Open source.",
    "feedback.button": "Feedback",
    "feedback.title": "Feedback",
    "feedback.close": "Close",
    "feedback.open": "Open feedback form",
    "theme.warm": "Warm",
    "theme.dark": "Dark",
    "lang.ru": "RU",
    "lang.en": "EN",
  },
};

const LANG_STORAGE_KEY = "care-landing-lang";

const AIRI_BASE = "https://airi.net";
const AIRI_PATHS = {
  about: { ru: "/ru/", en: "/?force=en" },
};

function detectLanguage() {
  // Explicit ?lang=ru / ?lang=en override — lets you share a link in a fixed language.
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "ru" || fromUrl === "en") return fromUrl;
  } catch (e) { }
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === "ru" || stored === "en") return stored;
  // Default to Russian; users can switch to English (choice is remembered).
  return "ru";
}

// Keep short prepositions/conjunctions glued to the next word so they never
// dangle at the end of a line. Uses a real non-breaking space (U+00A0) because
// values are written via textContent, where "&nbsp;" would show literally.
const ORPHAN_RE =
  /(?<=^|[\s(«"„])(во|со|ко|об|обо|изо|ото|над|под|при|без|для|про|или|the|and|for|with|from|that|в|с|к|о|у|и|а|но|не|ни|из|от|по|за|до|на|an|in|on|of|to|or|is|it|as|at|by|a) /gi;

function preventOrphans(text) {
  if (!text) return text;
  return text.replace(ORPHAN_RE, "$1\u00A0");
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = preventOrphans(dict[key]);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key]) el.setAttribute("title", dict[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
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

  // Point documentation links at the matching language: EN lives at the docs
  // root, RU is mirrored under /ru/.
  const docsBase = "https://airi-maestro.github.io/care-docs/";
  document.querySelectorAll("[data-doc-path]").forEach((el) => {
    const path = el.getAttribute("data-doc-path");
    el.setAttribute("href", docsBase + (lang === "ru" ? "ru/" : "") + path);
  });

  document.querySelectorAll("[data-airi-path]").forEach((el) => {
    const key = el.getAttribute("data-airi-path");
    const paths = AIRI_PATHS[key];
    if (paths) el.setAttribute("href", AIRI_BASE + paths[lang]);
  });
}

function setLanguage(lang) {
  const next = lang === "ru" ? "ru" : "en";
  localStorage.setItem(LANG_STORAGE_KEY, next);
  applyTranslations(next);
  // Reflect the language in the URL so the current page is shareable as-is.
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  } catch (e) { }
}


function initI18n() {
  const lang = detectLanguage();
  applyTranslations(lang);
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.lang === "ru" ? "ru" : "en";
      setLanguage(current === "ru" ? "en" : "ru");
    });
  });
}

window.CARE_I18N = { initI18n, setLanguage, applyTranslations, TRANSLATIONS };
