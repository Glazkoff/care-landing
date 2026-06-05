#!/usr/bin/env python3
"""Make mascot PNGs with baked light checker/white backgrounds transparent.

Some hand-made source PNGs are fully opaque even though the visual background
looks like transparency. We flood-fill the connected near-neutral-light
background in from the borders, so interior white highlights on EVOC are
preserved. A light fringe cleanup removes the anti-aliased halo.
"""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
MASCOTE = ROOT / "mascote"
SOURCES = ("start",)


def is_bg(r: int, g: int, b: int) -> bool:
    # neutral + light = the checker/white page; cream is warm (range>14)
    return min(r, g, b) >= 232 and (max(r, g, b) - min(r, g, b)) <= 16


def clean(stem: str) -> None:
    src = MASCOTE / f"{stem}.png"
    dst = MASCOTE / f"{stem}_clean.png"
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    px = img.load()

    bg = bytearray(w * h)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        for y in (0, h - 1):
            q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            q.append((x, y))

    while q:
        x, y = q.popleft()
        i = y * w + x
        if bg[i]:
            continue
        r, g, b, _ = px[x, y]
        if not is_bg(r, g, b):
            continue
        bg[i] = 1
        if x > 0:
            q.append((x - 1, y))
        if x < w - 1:
            q.append((x + 1, y))
        if y > 0:
            q.append((x, y - 1))
        if y < h - 1:
            q.append((x, y + 1))

    # fringe cleanup: light, low-saturation pixels touching transparency
    for _ in range(2):
        edge = []
        for y in range(h):
            for x in range(w):
                if bg[y * w + x]:
                    continue
                r, g, b, _ = px[x, y]
                if min(r, g, b) >= 226 and (max(r, g, b) - min(r, g, b)) <= 22:
                    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                        nx, ny = x + dx, y + dy
                        if 0 <= nx < w and 0 <= ny < h and bg[ny * w + nx]:
                            edge.append((x, y))
                            break
        for x, y in edge:
            bg[y * w + x] = 1

    for y in range(h):
        for x in range(w):
            if bg[y * w + x]:
                px[x, y] = (0, 0, 0, 0)

    img.save(dst)
    cleared = sum(bg)
    print(f"cleaned {src.name}: removed {cleared} px -> {dst.name}")


def main() -> None:
    for stem in SOURCES:
        clean(stem)


if __name__ == "__main__":
    main()
