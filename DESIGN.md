---
name: Televideo — tomiban.github.io
description: El CV de un desarrollador full stack como servicio de teletexto.
colors:
  field: "#06070a"
  paper: "#f2f0e6"
  key-yellow: "#ffe600"
  key-cyan: "#35d6d6"
  key-green: "#4fe34f"
  key-red: "#ff5240"
  key-blue: "#2b3ecf"
  leader: "#3a3d45"
  placeholder: "#7d818a"
  print-paper: "#ffffff"
  print-ink: "#000000"
typography:
  display:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "clamp(2.6rem, 13vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "0.01em"
  body:
    fontFamily: "ui-monospace, SFMono-Regular, DejaVu Sans Mono, Liberation Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(15px, 0.55vw + 11.4px, 20px)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.01em"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, DejaVu Sans Mono, monospace"
    fontSize: "0.76em"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 3vw, 2.4rem)"
  page-block: "1.6rem 0 2.2rem"
  row: "0.28em"
  bar-padding: "0.42em 0.7em"
  bar-gap: "1.4rem"
components:
  page-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.field}"
    rounded: "{rounded.none}"
    padding: "{spacing.bar-padding}"
  fastext-key:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.field}"
    rounded: "{rounded.none}"
    padding: "0.45em 0.6em"
  fastext-key-hold:
    backgroundColor: "{colors.key-red}"
    textColor: "{colors.field}"
    rounded: "{rounded.none}"
    padding: "0.35em 0.85em"
  index-row-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.field}"
  page-input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.key-yellow}"
    rounded: "{rounded.none}"
    width: "4.6ch"
---

# Design System: Televideo — tomiban.github.io

## Overview

Una sola página que se comporta como un servicio de teletexto de los 2000: cada bloque de
contenido tiene un número de página de tres dígitos y el visitante se mueve escribiéndolo. La
retícula es una celda de caracteres fija, no un sistema de columnas; por eso no hay tarjetas,
sombras, radios ni bordes: la separación se hace con vídeo inverso (bloque claro, texto oscuro) y
con celdas vacías.

Modo del surface: **Experience**. El registro de la persona es el trabajo; la interfaz se retira.

Voz: monoespaciada para todo dato, pixel display solo para el nombre. Español con jerga técnica
en inglés, sin registro de marketing.

## Colors

Estrategia: paleta completa de roles (4 colores con función, no decoración) sobre un campo casi
negro. Cada tecla tiene un trabajo fijo y nunca se usa solo color para transmitir estado: siempre
va acompañado de texto.

### Field y paper

- `field` `#06070a` — el fondo de toda la página. No es negro puro: el negro puro sobre pantalla
  no deja margen para el vídeo inverso.
- `paper` `#f2f0e6` — texto principal y fondo de las barras inversas y de las teclas.

### Teclas (roles)

- `key-yellow` `#ffe600` — títulos, el nombre, lo que el visitante tiene que leer primero.
- `key-cyan` `#35d6d6` — números de página, etiquetas de campo, metadatos, el reloj. Es el rol
  estructural, el que dice dónde estás.
- `key-green` `#4fe34f` — valores: cifras, fechas, el resultado de cada fila del índice.
- `key-red` `#ff5240` — banderas y estado: `PRIVADO`, `HOY`, el botón de pausa activo.
- `key-blue` `#2b3ecf` — solo relleno de celda en el mosaico de portada; nunca texto.

- `placeholder` `#7d818a` — el `300` de ejemplo en el campo de página: tiene que leerse como
  sugerencia sin confundirse con un valor cargado.
- `print-paper` / `print-ink` — la hoja impresa: fondo blanco, tinta negra, barras invertidas a
  negro con texto blanco.

### Named Rules

- **El color nunca es el único canal.** Toda tecla lleva su palabra al lado.
- **Sin grises de relleno.** Lo secundario se resuelve con cyan, no con un gris más claro.

## Typography

Dos voces y nada más.

- **Display:** Jersey 15 (auto-hospedada, OFL, `public/fonts/jersey-15.woff2`). Solo el `h1`. Es
  una pixel face condensada: a 6rem el nombre ocupa una línea en desktop y dos en móvil, con las
  tildes resolviéndose dentro de la retícula.
- **Dato y prosa:** la monoespaciada del sistema con `font-variant-numeric: tabular-nums`. Todo el
  resto del documento — etiquetas, cifras, párrafos, botones — es esta voz, porque el documento
  entero es un registro de mediciones.

### Hierarchy

| Rol | Tamaño | Detalle |
| --- | --- | --- |
| Nombre | `clamp(2.6rem, 13vw, 6rem)` | Jersey 15, amarillo, `line-height: .94` |
| Barra de página | `1em`, mono | Mayúsculas, `letter-spacing: .16em`, en vídeo inverso |
| Entrada (empresa, proyecto, repo) | `1.05–1.15em`, mono | Mayúsculas con tracking, amarillo o paper |
| Cuerpo | `var(--fs)` | Máximo 66–70ch |
| Etiqueta | `.76em`, cyan | Mayúsculas, `letter-spacing: .2em` |

### Named Rules

- **Sin kicker sobre el título.** El nombre del autor es el título; no lleva bajada en mayúsculas
  encima.
- **Tracking solo en mayúsculas cortas.** La prosa va con el tracking por defecto de la mono.

## Layout

Una columna de documento que se ensancha con el viewport; los registros ocupan el ancho completo y
la prosa se corta a 60–70ch. La retícula del índice es `4ch · etiqueta · líder punteado · valor`,
con el número de página en la primera celda.

- Aire vertical: `1.6rem` arriba de cada página, `2.2rem` abajo; más espacio arriba de un título
  que debajo.
- El primer viewport es la tesis: barra superior con nombre + `P100/1` + reloj, el nombre en una
  línea, la bajada, el índice de siete filas y el mosaico de celdas a la derecha.
- Barra superior pegajosa; fila fastext pegajosa al pie desde 48rem (estática en móvil), con cuatro
  destinos.
- Punto de quiebre principal: 62rem (índice a dos columnas, fichas `18ch + 1fr`, fechas de trabajo
  a la derecha). Secundario: 48rem. Ambas columnas miden en `ch`, así que la retícula escala con la
  tipografía.

## Elevation & Depth

No hay elevación. Ni sombras, ni desenfoques, ni bordes translúcidos: la profundidad es la del
vídeo inverso, un bloque claro sobre el campo. Lo que en otro sistema sería una tarjeta acá es una
barra de página invertida.

## Shapes

Rectángulos puros, radio 0 en todo. Los separadores son cuadrados de media celda (`.cell`), no
glifos ni iconos. El mosaico de portada son nueve cuadrados de color en una grilla 3×3.

## Components

### Barras de página

Bloque `paper` a todo el ancho, con el número de página, el título en mayúsculas y el sello
`P200/1` alineado a la derecha. Es el único elemento claro a sangre de la página; no lleva borde
porque el bloque ya es el borde.

### Filas de índice

`4ch / max-content / 1fr / max-content`. En reposo: número cyan, etiqueta en paper, líder punteado,
valor verde. En hover o foco: toda la fila se invierte a paper con texto `field`, y los colores de
los hijos pasan a `field` para no perder contraste. En móvil la fila baja a dos líneas y el valor
va debajo de la etiqueta.

### Teclas y controles

Botones (`Ir`, `Anterior`, `Siguiente`, `Pausa`) son bloques `paper` con texto `field`;
hover/foco los pinta de amarillo. El estado de pausa usa `key-red` con `aria-pressed`.

### Campo de página

Input de `4.6ch`, fondo transparente y subrayado cyan de 2px; en foco el subrayado pasa a amarillo
y el texto a `key-yellow`. Sin JS no se muestra: el formulario nace con `hidden` y el script lo
habilita, porque sin JS no tendría destino válido.

### Mosaico de portada

Nueve celdas de color, decorativas (`aria-hidden`), con una animación de aparición celda por celda
de 70ms cuando el sistema no pide movimiento reducido. Es el único momento animado del sitio.

## Do's and Don'ts

- **Hacé:** separar con vídeo inverso y con celdas vacías.
- **Hacé:** acompañar cada color con su palabra.
- **Hacé:** mantener cifras tabulares y todo alineado a la celda.
- **No:** agregar bordes, radios, sombras o degradados; el mundo no los tiene.
- **No:** usar un ícono o emoji donde va una celda o una palabra.
- **No:** meter tracking ancho en prosa, ni bajar el tamaño del cuerpo para “que entre”.
- **No:** poner más de tres colores de tecla en un mismo bloque.
