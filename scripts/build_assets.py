#!/usr/bin/env python3
"""Build optimized landing assets from mascot source files."""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
MASCOT_SRC = ROOT / "mascote" / "2.png"
AIRI_LOGO = ROOT / "care" / "assets" / "airi_logo.png"
OUT_DIR = Path(__file__).resolve().parents[1] / "assets"

TARGET_WIDTH = 480


def trim_largest_alpha_component(img: Image.Image) -> Image.Image:
    """Crop to the main mascot, ignoring tiny alpha artifacts near the edges."""
    alpha = img.split()[3]
    px = alpha.load()
    width, height = img.size
    visited = bytearray(width * height)
    best: tuple[int, tuple[int, int, int, int]] | None = None

    for start_y in range(height):
        for start_x in range(width):
            idx = start_y * width + start_x
            if visited[idx] or px[start_x, start_y] <= 32:
                continue

            queue: deque[tuple[int, int]] = deque([(start_x, start_y)])
            visited[idx] = 1
            count = 0
            min_x = max_x = start_x
            min_y = max_y = start_y

            while queue:
                x, y = queue.popleft()
                count += 1
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                min_y = min(min_y, y)
                max_y = max(max_y, y)

                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        ni = ny * width + nx
                        if not visited[ni] and px[nx, ny] > 32:
                            visited[ni] = 1
                            queue.append((nx, ny))

            if best is None or count > best[0]:
                best = (count, (min_x, min_y, max_x + 1, max_y + 1))

    if best is None:
        return img
    return img.crop(best[1])


def resize_mascot(src: Path, width: int) -> Image.Image:
    img = Image.open(src).convert("RGBA")
    img = trim_largest_alpha_component(img)
    ratio = width / img.width
    height = max(1, int(img.height * ratio))
    return img.resize((width, height), Image.Resampling.LANCZOS)


def upscale_logo(src: Path, size: int) -> Image.Image:
    img = Image.open(src).convert("RGBA")
    return img.resize((size, size), Image.Resampling.NEAREST)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    mascot = resize_mascot(MASCOT_SRC, TARGET_WIDTH)
    mascot.save(OUT_DIR / "mascot.webp", "WEBP", quality=90, method=6)
    mascot.save(OUT_DIR / "mascot.png", "PNG", optimize=True)

    favicon = upscale_logo(AIRI_LOGO, 64)
    favicon.save(OUT_DIR / "favicon.png", "PNG", optimize=True)

    print("Built landing assets:")
    print(f"  mascot: {mascot.width}x{mascot.height}")
    for name in ("mascot.webp", "favicon.png"):
        path = OUT_DIR / name
        print(f"  {name}: {path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
