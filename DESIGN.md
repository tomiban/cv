---
name: Ficha de terminal — tomiban.github.io
description: El CV de un desarrollador full stack como cuadro de diálogo de terminal, fósforo ámbar.
colors:
  screen: "#0b0a08"
  ink: "#ffb000"
  ink-2: "#d59a20"
  rule: "#5b3f09"
  screen-green: "#070a07"
  ink-green: "#4dff8f"
  ink-2-green: "#3fc473"
  rule-green: "#1d5c33"
  print-paper: "#ffffff"
  print-ink: "#000000"
typography:
  display:
    fontFamily: "ui-monospace, SFMono-Regular, DejaVu Sans Mono, Liberation Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(1.8rem, 5.6vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "ui-monospace, SFMono-Regular, DejaVu Sans Mono, Liberation Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(14px, 0.28vw + 12.2px, 16px)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.015em"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, DejaVu Sans Mono, monospace"
    fontSize: "0.78em"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.16em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 3vw, 2rem)"
  pad: "clamp(0.9rem, 1.6vw, 1.4rem)"
  win-gap: "1.6rem"
  row: "0.5em 0.5em"
components:
  window:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.pad}"
  window-identity:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink}"
    padding: "{spacing.pad}"
  menu-item:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.15em 0.45em"
  menu-item-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.screen}"
    rounded: "{rounded.none}"
    padding: "0.15em 0.45em"
  menu-hotkey:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.screen}"
    rounded: "{rounded.none}"
    padding: "0 0.4em"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.screen}"
    rounded: "{rounded.none}"
    padding: "0.35em 0.85em"
  button:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.35em 0.85em"
  row:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink}"
    padding: "{spacing.row}"
  status-bar:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink-2}"
    padding: "0.5rem 1.4rem"
---

# Design System: Ficha de terminal

## Overview

Una sola página que se comporta como un cuadro de diálogo de terminal: barra de menú con teclas
numéricas arriba, ventanas con marco y título en el borde, barra de estado fija al pie. El mundo es
el de una TUI de los 80 y 90 — ncurses, Turbo Vision, `dialog` — traducido a HTML sin simular el
hardware: no hay scanlines, ni curvatura, ni brillo de fósforo falsificado.

Modo del surface: **Experience**. El registro de la persona es el trabajo; la interfaz es la
herramienta que lo muestra.

Voz: monoespaciada, sin excepción. Español con jerga técnica en inglés.

## Colors

Dos tintas y una regla. Nada más.

- `screen` `#0b0a08` — el fondo. Negro cálido, no puro: deja margen para el vídeo inverso.
- `ink` `#ffb000` — texto, marcos de ventana, botones. Fósforo ámbar.
- `ink-2` `#d59a20` — etiquetas, metadatos, marcas de ítem. Ámbar atenuado, nunca por debajo de
  4.5:1 sobre `screen`.
- `rule` `#5b3f09` — líneas de 1px: separadores, marcos secundarios, líneas de puntos. Es
  decoración estructural, no texto.

Fósforo alternativo, activado con la tecla **G** y guardado en `localStorage`: `screen-green`
`#070a07`, `ink-green` `#4dff8f`, `ink-2-green` `#3fc473`, `rule-green` `#1d5c33`. El par se cambia
en un solo lugar: `:root[data-phosphor="green"]`.

La hoja impresa invierte a papel y tinta: `print-paper` `#ffffff` y `print-ink` `#000000`, con
las ventanas en 1px negro y el menú fuera del flujo.

### Named Rules

- **Dos tintas.** Ningún tercer color, ni siquiera para estados: el énfasis es vídeo inverso.
- **El color no es señal.** La selección se ve por bloque invertido, no por tono.

## Typography

Una sola voz: la monoespaciada del sistema. No es una concesión: en una TUI la tipografía **es** el
medio, la grilla de la pantalla. Se elige la del sistema para que el texto se comporte como en la
terminal del visitante, y por eso no hay fuente auto-hospedada ni glifos de caja dibujados: los
marcos son bordes CSS, así que nunca dependen de que la fuente tenga `┌ ─ ┐`.

### Hierarchy

| Rol | Tamaño | Detalle |
| --- | --- | --- |
| Nombre | `clamp(1.8rem, 5.6vw, 3.2rem)` | Mayúsculas, `letter-spacing: .02em`, cursor de bloque detrás |
| Título de ventana | `.76em` | Mayúsculas, `letter-spacing: .2em`, se apoya sobre el borde |
| Etiqueta de campo | `.78em` | Mayúsculas, ámbar atenuado, alineada a la derecha en desktop |
| Cuerpo | `var(--fs)` | Máximo 74ch |
| Barra de estado y menú | `.74–.78em` | Mayúsculas, `letter-spacing: .14em` |

### Named Rules

- **Todo dato en cifras tabulares.** `font-variant-numeric: tabular-nums` en el documento entero.
- **Ningún tracking en prosa.** El tracking se reserva a mayúsculas cortas.

## Layout

Una columna de ventanas apiladas. Barra de menú pegajosa arriba (siete destinos con su tecla),
barra de estado fija abajo, y entre las dos el documento.

- Ventana de identidad: marco `3px double` — el único doble de la página — con el nombre grande.
- Ventanas de sección: marco de 1px `rule`, título en el borde superior.
- Filas de campo: `16ch · 1fr` con la etiqueta a la derecha; en móvil se apilan en una columna.
- Punto de quiebre: 48rem. Techo: 78rem con `main` a 1280px centrado.
- En móvil el pie crece a dos líneas y el `body` reserva 7.2rem para que nada quede tapado.

## Elevation & Depth

No hay elevación. Cero sombras, cero desenfoques, cero degradados. La profundidad es la del vídeo
inverso: un bloque ámbar sobre pantalla negra. Los marcos dobles hacen de jerarquía, no de relieve.

## Shapes

Rectángulos puros, radio 0. Los marcos son bordes: `3px double` para la ventana principal y `1px
solid` para las demás. El cursor es un rectángulo sólido `.55em × .78em` que parpadea con
`steps(1)`; con `prefers-reduced-motion` queda fijo.

## Components

### Barra de menú

Siete enlaces con la tecla en vídeo inverso (`[1] PERFIL`). La sección activa se marca con
`aria-current="true"` y se pinta invertida; en hover y foco también. La tecla real funciona: `1`–`7`
saltan a la sección.

### Ventanas

`.win` es un marco de 1px con el título apoyado arriba, `background: screen` para cortar la línea.
`.win--id` sube a `3px double` y a mayor padding. El título es un `h2` en `.win__t`.

### Filas de campo

Etiqueta en `ink-2` y valor en `ink`, separadas por una línea de 1px. Cuando la fila es un enlace,
hover y foco la invierten completa y las etiquetas pasan a `screen`, para no perder contraste.

### Monitor ASCII

Un CRT dibujado con `+ - | =` y comillas — sólo ASCII, nunca glifos de caja, para no depender de la
cobertura de la fuente. Dentro de la pantalla corre una partida de snake: `@` cabeza, `o` cuerpo,
`*` comida y un marcador `PUNTOS` / `HI` arriba.

Los once cuadros de la animación se generan en build time con un recorrido cerrado de celdas (no
están escritos a mano), así el bucle cierra sin saltos y el marcador sube cuadro a cuadro. Se apilan
con `position: absolute` y se muestran de a uno con `steps(1)` cada 0.4 s; el primero queda en flujo
para que el bloque mida lo que debe. Con `prefers-reduced-motion` queda un cuadro fijo, y en
`@media print` las animaciones se apagan.

### Acción

Una sola en toda la página y vive en la barra de menú: `CONTACTAR`, en vídeo inverso y empujado al
borde derecho, visible en cualquier punto del scroll. Las ventanas no repiten navegación ni
acciones.

### Botones

`< Ver experiencia >` con corchetes angulares en el texto: `1px solid ink`, sin relleno salvo el
primario, que va invertido. Hover y foco invierten.

### Barra de estado

Fija al pie: glosas de teclas a la izquierda, contacto y firma a la derecha. Es la única zona con
`ink-2` como color de texto base.

## Do's and Don'ts

- **Hacé:** separar con líneas de 1px y con bloques invertidos.
- **Hacé:** mantener la grilla de caracteres; nada de centrar por moda.
- **Hacé:** nombrar las teclas que el visitante puede usar.
- **No:** agregar sombras, radios, degradados ni "efecto CRT" (scanlines, viñeta, brillo).
- **No:** introducir un tercer color o un icono; donde iría un icono va texto o un bloque.
- **No:** bajar el cuerpo por debajo de 14px para "que entre".
