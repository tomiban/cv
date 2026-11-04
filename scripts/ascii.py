"""Convierte una foto en el retrato ASCII del hero.

Uso: python3 -I scripts/ascii.py <foto> [columnas]
Escribe src/assets/retrato.txt (para fondo claro) y retrato-oscuro.txt (densidad invertida, para
fondo oscuro); la página los muestra si existen.
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

ROOT = Path(__file__).resolve().parent.parent

def main() -> None:
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    cols = int(sys.argv[2]) if len(sys.argv) > 2 else 96

    gray = ImageOps.exif_transpose(Image.open(src)).convert("L")
    # recorta el fondo claro y se queda con cabeza y hombros
    box = gray.point(lambda v: 255 if v < BG else 0).getbbox()
    if box:
        left, top, right, bottom = box
        box = (left, top, right, top + round((bottom - top) * CROP_HEIGHT))
        gray = gray.crop(box)
    rows = max(1, round(gray.height / gray.width * cols * CELL_ASPECT))
    gray = gray.resize((cols, rows), Image.LANCZOS)

    # el fondo queda en blanco; la curva oscurece los medios tonos para que la cara no se lave
    mask = gray.point(lambda v: 255 if v < BG else 0)
    eq = ImageOps.autocontrast(gray, cutoff=1, mask=mask).point(lambda v: round(255 * (v / 255) ** GAMMA))

    px, pm = eq.load(), mask.load()
    def render(ramp: str) -> str:
        last = len(ramp) - 2  # el espacio queda reservado para el fondo
        lines = [
            "".join(ramp[px[x, y] * last // 255] if pm[x, y] else " " for x in range(cols)).rstrip()
            for y in range(rows)
        ]
        return "\n".join(lines) + "\n"

    out = ROOT / "src" / "assets" / "retrato.txt"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render(RAMP), encoding="utf-8")
    # sobre fondo oscuro la tinta es clara: las sombras van con los caracteres livianos
    (out.parent / "retrato-oscuro.txt").write_text(render(RAMP[-2::-1] + " "), encoding="utf-8")
    print(f"{out} · {cols}x{rows}")

if __name__ == "__main__":
    main()
