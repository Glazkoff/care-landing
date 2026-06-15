# MAESTRO CARE Landing Page

Static marketing landing for **MAESTRO CARE** — an ecosystem for generating and evolving reasoning chains, in the AIRI aesthetic with mascot **Maestric**.

## Features

- Two color themes switchable live: **Warm** (default) and **Dark**
- Shareable theme URLs: `?theme=warm`, `?theme=crystal`
- RU / EN language toggle with auto-detect
- Living Maestric mascot in multiple emotions across the page (wave, think, work, crystal, coffee, cheer)
- Smooth float, breathing, micro-gestures, sparkles — never jerky
- Live TUI terminal demo section
- No build step required — pure HTML/CSS/JS

## Quick start

```bash
# From repo root
cd landing
python3 -m http.server 8080
# Open http://localhost:8080
```

Or open `index.html` directly in a browser (some features work best via a local server).

## Rebuild mascot assets

If you update `mascote/2.png`:

```bash
cd landing
python3 -m venv .venv
.venv/bin/pip install pillow
.venv/bin/python scripts/build_assets.py
.venv/bin/python scripts/build_hero_gif.py
```

This produces:

- `assets/mascot.webp` — optimized static fallback mascot
- `assets/hero-mascot.gif` — transparent looping hero mascot from the source GIF
- `assets/favicon.png` — AIRI crystal favicon

## Rebuild emotion emotes

The per-section Maestric emotes are the hand-made high-res PNGs in `mascote/`
(`think`, `work`, `coffee`, `cheers`, `surprised`, `agent_generation`, the
transparent GigaEvo evolution strip, plus `start_clean`). The build trims the
padding and downscales each with LANCZOS for crisp, detailed art:

```bash
.venv/bin/python scripts/build_emotes.py      # -> assets/evoc-*.webp
```

`start.png` ships with a baked checker/white background, so it's first made
transparent with `scripts/clean_evolution.py` (border flood-fill) into
`mascote/start_clean.png`, which `build_emotes.py` then turns into
`evoc-start.webp`. The current GigaEvo strip uses the already-transparent
`gigaevo_agent_evolution_transparent (1).png` source directly.

They're placed at deliberately different sizes across the page (see the
`.scene--gen/run/evo`, `.mascot-stage--calm`, `.cta-visual` width rules in
`styles.css`) so the little ones feel scattered rather than stamped at one
scale. `build_emotes.py` maps source stems to emote names — add a row to
`EMOTES` to wire in a new pose.

> The older `extract_poses.py` / `finalize_variants.py` scripts pulled poses
> out of the `mascote/4.png` sprite sheet; they're superseded by the
> dedicated high-res emotes above but kept for reference.

## Deploy

### GitHub Pages

1. Push the `landing/` folder contents to a `gh-pages` branch or configure Pages to serve from `/landing`.
2. Share theme variants:
   - `https://your-domain/?theme=warm`
   - `https://your-domain/?theme=crystal`

### Netlify / Vercel

Set publish directory to `landing/`. No build command needed.

## File map

| File | Purpose |
|------|---------|
| `index.html` | Page structure, sections, OG meta |
| `styles.css` | Themes, layout, mascot & reveal animations |
| `i18n.js` | RU/EN translations |
| `main.js` | Theme/lang switching, terminal demo, particles |
| `scripts/build_assets.py` | PIL asset pipeline |
| `assets/` | Optimized images |
