#!/usr/bin/env python3
"""Full-sheet connected-component extraction of EVOC poses.

Each component is exported using ITS OWN pixel mask (everything else
transparent), so labels and neighbouring sprites that merely fall inside
the bounding box are excluded. A montage is written for quick review."""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
SHEET = ROOT / "mascote" / "4.png"
OUT = Path(__file__).resolve().parents[1] / "assets" / "_poses"

BG_LO, BG_HI = 184, 255  # gray page bg + soft shadows + faint white cards


def is_bg(r, g, b):
    # grayish + light: page bg, shadow ovals, and the near-white pose cards.
    # Cream (b<200) and teal/mint/cyan are not grayish, so they survive.
    return (
        BG_LO <= r <= BG_HI and BG_LO <= g <= BG_HI and BG_LO <= b <= BG_HI
        and abs(r - g) < 12 and abs(g - b) < 12 and abs(r - b) < 12
    )


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    img = Image.open(SHEET).convert("RGB")
    w, h = img.size
    px = img.load()

    content = bytearray(w * h)
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if not is_bg(r, g, b):
                content[y * w + x] = 1

    visited = bytearray(w * h)
    comps = []
    for sy in range(h):
        for sx in range(w):
            i = sy * w + sx
            if not content[i] or visited[i]:
                continue
            q = deque([(sx, sy)])
            visited[i] = 1
            pix = []
            mnx = mxx = sx
            mny = mxy = sy
            while q:
                x, y = q.popleft()
                pix.append((x, y))
                mnx = min(mnx, x); mxx = max(mxx, x)
                mny = min(mny, y); mxy = max(mxy, y)
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        ni = ny * w + nx
                        if content[ni] and not visited[ni]:
                            visited[ni] = 1
                            q.append((nx, ny))
            comps.append((pix, mnx, mny, mxx, mxy))

    # full-body poses: tall, dense, plausible size
    cands = []
    for pix, mnx, mny, mxx, mxy in comps:
        bw, bh = mxx - mnx + 1, mxy - mny + 1
        if bh >= 72 and 45 <= bw <= 175 and len(pix) >= 1700:
            cands.append((pix, mnx, mny, mxx, mxy, bw, bh))
    cands.sort(key=lambda c: (c[2] // 40, c[1]))

    print(f"{len(comps)} components, {len(cands)} pose candidates")
    crops = []
    for idx, (pix, mnx, mny, mxx, mxy, bw, bh) in enumerate(cands):
        crop = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
        cp = crop.load()
        for (x, y) in pix:
            r, g, b = px[x, y]
            cp[x - mnx, y - mny] = (r, g, b, 255)
        crop.save(OUT / f"pose_{idx:02d}.png")
        crops.append(crop)
        print(f"  pose_{idx:02d}: pos=({mnx},{mny}) size={bw}x{bh} px={len(pix)}")

    # montage
    cols = 8
    cell = 150
    rows = (len(crops) + cols - 1) // cols
    sheet = Image.new("RGBA", (cols * cell, rows * cell), (245, 245, 245, 255))
    d = ImageDraw.Draw(sheet)
    for i, c in enumerate(crops):
        cx = (i % cols) * cell
        cy = (i // cols) * cell
        sc = min((cell - 30) / c.width, (cell - 30) / c.height, 1.4)
        cc = c.resize((int(c.width * sc), int(c.height * sc)))
        sheet.alpha_composite(cc, (cx + (cell - cc.width) // 2, cy + 16))
        d.text((cx + 4, cy + 2), f"{i:02d}", fill=(200, 0, 0, 255))
    sheet.save(OUT / "_montage.png")
    print("montage saved")


if __name__ == "__main__":
    main()
