"""Convierte una foto en el retrato ASCII del hero.

Uso: python3 -I scripts/ascii.py <foto> [columnas]
Escribe src/assets/retrato.txt; la página lo muestra si existe.
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps

# de oscuro a claro: sobre fondo claro, los caracteres densos son las sombras
RAMP = "@%#*+=-:. "
# una celda de texto mono es ~2 veces más alta que ancha
CELL_ASPECT = 0.5
# más claro que esto es fondo
BG = 228
# fracción de la altura de la figura que entra en el retrato
CROP_HEIGHT = 0.5
# > 1 oscurece los medios tonos
GAMMA = 1.7

def main() -> None:
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    cols = int(sys.argv[2]) if len(sys.argv) > 2 else 56

    img = ImageOps.exif_transpose(Image.open(src)).convert("L")
    # recorta el fondo claro y se queda con cabeza y hombros
    box = img.point(lambda v: 255 if v < BG else 0).getbbox()
    if box:
        left, top, right, bottom = box
        img = img.crop((left, top, right, top + round((bottom - top) * CROP_HEIGHT)))
    rows = max(1, round(img.height / img.width * cols * CELL_ASPECT))
    img = img.resize((cols, rows), Image.LANCZOS)

    # el fondo queda en blanco; la curva oscurece los medios tonos para que la cara no se lave
    mask = img.point(lambda v: 255 if v < BG else 0)
    eq = ImageOps.autocontrast(img, cutoff=1, mask=mask).point(lambda v: round(255 * (v / 255) ** GAMMA))

    px, pm = eq.load(), mask.load()
    lines = []
    for y in range(rows):
        line = "".join(
            RAMP[px[x, y] * (len(RAMP) - 2) // 255] if pm[x, y] else " " for x in range(cols)
        )
        lines.append(line.rstrip())

    out = Path(__file__).resolve().parent.parent / "src" / "assets" / "retrato.txt"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"{out} · {cols}x{rows}")

if __name__ == "__main__":
    main()
