#!/usr/bin/env python3
"""Prepare the hand-made high-res EVOC emotes for the landing page.

The source PNGs in ../../mascote are 1024x1024 with lots of transparent
padding. We trim the padding and downscale the longest side to MAX_SIDE
with LANCZOS (these are detailed art, so smooth downscale = crisp — the
opposite of the tiny sprite crops, which needed NEAREST). Output: webp.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "mascote"
OUT = Path(__file__).resolve().parents[1] / "assets"
MAX_SIDE = 560

# source png stem -> output emote name
EMOTES = {
    "think": "think",
    "work": "work",
    "coffee": "coffee",
    "cheers": "cheers",
    "surprised": "surprised",
    "agent_generation": "generate",
    "gigaevo_agent_evolution_transparent (1)": "evolve",
    "start_clean": "start",
}


def trim(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def main() -> None:
    print(f"Building EVOC emotes (trim + LANCZOS downscale to {MAX_SIDE}px):")
    for stem, name in EMOTES.items():
        img = Image.open(SRC / f"{stem}.png").convert("RGBA")
        img = trim(img)
        scale = MAX_SIDE / max(img.width, img.height)
        if scale < 1:
            img = img.resize(
                (max(1, round(img.width * scale)), max(1, round(img.height * scale))),
                Image.Resampling.LANCZOS,
            )
        dst = OUT / f"evoc-{name}.webp"
        img.save(dst, "WEBP", quality=92, method=6)
        kb = dst.stat().st_size // 1024
        print(f"  evoc-{name}: {img.width}x{img.height}  ({kb} KB)")


if __name__ == "__main__":
    main()
