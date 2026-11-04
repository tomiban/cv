---
name: Marca personal — tomasbanchio.com.ar
description: Landing de marca para clientes y reclutadores; papel cálido, tinta y una sola señal ámbar, con guiños de terminal.
colors:
  paper: "#f3efe6"
  paper-2: "#e9e3d6"
  card: "#fbf9f4"
  ink: "#17150f"
  ink-2: "#5a5446"
  rule: "#d4ccb9"
  accent: "#ffb000"
  accent-text: "#8a5a00"
  dark-paper: "#0f0e0b"
  dark-ink: "#f3ecdc"
  dark-ink-2: "#b3a98f"
  dark-accent-text: "#ffc24d"
typography:
  display: "Bricolage Grotesque Variable (self-hosted vía @fontsource-variable), 650, tracking -0.02em"
  body: "system-ui, 1rem–1.125rem, line-height 1.6"
  mono: "ui-monospace — solo etiquetas, metadatos, kicker y tags"
  signature: "Jersey 15 (public/fonts) — solo la firma del pie"
rounded: "0"
---

# Design System: Marca personal

## Overview

Una sola página que vende un servicio y, más abajo, respalda un perfil. Orden: hero con promesa y
CTA → franja de pruebas → servicios → casos → cómo trabajo (franja ámbar) → perfil para
reclutadores → CTA final en negro → pie con firma.

## Colors

- `paper` / `ink` son el fondo y el texto; `ink-2` para texto secundario (≥ 6:1 sobre `paper`).
- `accent` (#ffb000) es la **única señal**: CTA principal, la franja de proceso, el bloque de
  resultado de cada caso y los cursores. Nunca como color de texto sobre papel: para eso está
  `accent-text` (#8a5a00, ≈ 5:1).
- Modo oscuro por `prefers-color-scheme`: vuelve el negro cálido y el ámbar del sitio anterior.

## Typography

- Titulares en Bricolage Grotesque con `text-wrap: balance`; párrafos con `text-wrap: pretty`.
- La mono queda para etiquetas (`> SERVICIOS`, `IDEAL PARA`, fechas, stack). No para leer.

## Components

- **Botón**: esquinas rectas, borde 1.5px; al pasar, se desplaza 2px y deja una sombra dura de 4px.
  Variantes: `--accent` (CTA), `--ink` y `--line` (sobre el CTA final), `--sm`.
- **Servicio**: celda de grilla numerada `01–05`; 1 / 2 / 2+3 columnas.
- **Caso**: meta a la izquierda (nombre con ↗, cliente, empleador, stack) y a la derecha
  problema → qué hice → resultado en un bloque ámbar.
- **CTA flotante**: solo debajo de 52rem, abajo a la derecha.

## Motion

- Entrada al hacer scroll con `animation-timeline: view()` dentro de
  `prefers-reduced-motion: no-preference` y `@supports`; sin fallback porque es decorativa.
- Cursor parpadeante con `steps(1)`, apagado con movimiento reducido.

## Rules

- Nada de métricas, clientes ni testimonios inventados.
- Un solo color de acento; el resto es tinta y papel.
- La terminal es un guiño, no el sistema.
