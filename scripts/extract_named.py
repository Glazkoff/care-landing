#!/usr/bin/env python3
"""Extract named EVOC poses from 4.png by running connected-component
analysis inside hand-picked regions, merging the real content blobs
(mascot + held props) while dropping thin label text."""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SHEET = ROOT / "mascote" / "4.png"
OUT = Path(__file__).resolve().parents[1] / "assets" / "_poses"

BG_LO, BG_HI = 226, 244

# region boxes (x0, y0, x1, y1) around each labelled pose on the sheet
REGIONS = {
    "think": (762, 332, 866, 430),
    "work": (986, 238, 1110, 332),
    "success": (1372, 330, 1496, 432),
    "cheer": (1232, 598, 1344, 700),
    "thumbsup": (1378, 598, 1496, 700),
    "sit": (632, 598, 748, 700),
    "love": (1100, 488, 1212, 590),
    "excited": (560, 488, 668, 590),
}


def is_bg(r, g, b):
    return (
        BG_LO <= r <= BG_HI and BG_LO <= g <= BG_HI and BG_LO <= b <= BG_HI
        and abs(r - g) < 8 and abs(g - b) < 8
    )


def components(px, x0, y0, x1, y1):
    w = x1 - x0
    h = y1 - y0
    content = bytearray(w * h)
    for y in range(h):
        for x in range(w):
            r, g, b = px[x0 + x, y0 + y]
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
            mnx = mxx = sx
            mny = mxy = sy
            cnt = 0
            while q:
                x, y = q.popleft()
                cnt += 1
                mnx = min(mnx, x); mxx = max(mxx, x)
                mny = min(mny, y); mxy = max(mxy, y)
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        ni = ny * w + nx
                        if content[ni] and not visited[ni]:
                            visited[ni] = 1
                            q.append((nx, ny))
            comps.append((cnt, x0 + mnx, y0 + mny, x0 + mxx, y0 + mxy,
                          mxy - mny + 1))
    return comps


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    img = Image.open(SHEET).convert("RGB")
    px = img.load()

    for name, (x0, y0, x1, y1) in REGIONS.items():
        comps = components(px, x0, y0, x1, y1)
        # keep substantial blobs that are not thin label text
        keep = [c for c in comps if c[0] >= 1200 and c[5] >= 38]
        if not keep:
            keep = [max(comps, key=lambda c: c[0])]
        minx = min(c[1] for c in keep)
        miny = min(c[2] for c in keep)
        maxx = max(c[3] for c in keep)
        maxy = max(c[4] for c in keep)
        pad = 3
        crop = img.crop((minx - pad, miny - pad, maxx + pad + 1, maxy + pad + 1))
        crop = crop.convert("RGBA")
        out = [(r, g, b, 0) if is_bg(r, g, b) else (r, g, b, a)
               for r, g, b, a in crop.getdata()]
        crop.putdata(out)
        crop.save(OUT / f"named_{name}.png")
        print(f"  {name}: {crop.width}x{crop.height}")


if __name__ == "__main__":
    main()
