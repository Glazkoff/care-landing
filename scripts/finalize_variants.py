#!/usr/bin/env python3
"""Turn reviewed raw pose crops into clean, label-free, sized EVOC
variants for the landing page. Detects the transparent gap under the
sheet label, crops it off, trims, and exports webp + png."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

POSES = Path(__file__).resolve().parents[1] / "assets" / "_poses"
OUT = Path(__file__).resolve().parents[1] / "assets"
# Pixel-art: upscale with an INTEGER NEAREST factor so pixels stay crisp
# (LANCZOS blurs it). CSS adds image-rendering: pixelated on top.
SCALE = 3

# raw pose index on the montage -> output variant name
VARIANTS = {
    "think": 25,
    "work": 16,
    "crystal": 46,
    "coffee": 28,
    "cheer": 48,
}


def row_alpha_counts(img: Image.Image) -> list[int]:
    a = img.split()[3]
    w, h = img.size
    px = a.load()
    return [sum(1 for x in range(w) if px[x, y] > 16) for y in range(h)]


def strip_label(img: Image.Image) -> Image.Image:
    """Crop off the top label band by finding the first empty row gap
    in the upper third, then keeping everything below it."""
    counts = row_alpha_counts(img)
    h = len(counts)
    limit = int(h * 0.4)
    seen_content = False
    for y in range(limit):
        if counts[y] > 0:
            seen_content = True
        elif seen_content:
            # first empty row after the label block -> crop below the gap
            top = y
            while top < h and counts[top] == 0:
                top += 1
            return img.crop((0, top, img.width, img.height))
    return img


def trim(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def main() -> None:
    print("Building EVOC emotion variants (crisp NEAREST x%d):" % SCALE)
    for name, idx in VARIANTS.items():
        src = POSES / f"pose_{idx:02d}.png"
        img = Image.open(src).convert("RGBA")
        img = trim(img)
        # crisp integer upscale — no blurring of the pixel art
        img = img.resize((img.width * SCALE, img.height * SCALE),
                         Image.Resampling.NEAREST)
        img.save(OUT / f"evoc-{name}.webp", "WEBP", quality=95, method=6)
        img.save(OUT / f"evoc-{name}.png", "PNG", optimize=True)
        kb = (OUT / f"evoc-{name}.webp").stat().st_size // 1024
        print(f"  evoc-{name}: {img.width}x{img.height}  ({kb} KB)")


if __name__ == "__main__":
    main()
