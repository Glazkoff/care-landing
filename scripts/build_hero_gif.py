#!/usr/bin/env python3
"""Prepare transparent looping GIF mascots for the landing page."""

from __future__ import annotations

from pathlib import Path
from shutil import copyfile

from PIL import Image, ImageSequence

ROOT = Path(__file__).resolve().parents[2]
ASSETS = Path(__file__).resolve().parents[1] / "assets"
GIFS = {
    "pixellab-The-creature-stands-in-place-a-1780664967490.gif": "hero-mascot.gif",
    "work.gif": "work.gif",
    "coffee.gif": "coffee.gif",
}


def main() -> None:
    for src_name, out_name in GIFS.items():
        src = ROOT / "mascote" / src_name
        out = ASSETS / out_name
        copyfile(src, out)

        image = Image.open(out)
        frames = list(ImageSequence.Iterator(image))
        if not frames:
            raise RuntimeError(f"No frames read from {src}")

        print(
            f"{out.name}: {image.width}x{image.height}, "
            f"{len(frames)} frames, {out.stat().st_size // 1024} KB"
        )


if __name__ == "__main__":
    main()
