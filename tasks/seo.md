# Tarea: SEO del sitio

Estado: pendiente
Alcance: `astro.config.mjs`, `src/pages/index.astro`, `public/`

## Contexto

Auditoría hecha el 2026-10-29. El sitio pasa de `tomiban.github.io` a
`tomasbanchio.com.ar`. La base estaba bien (lang, title, description, og tags,
jerarquía de headings), pero faltan canonical, datos
estructurados y archivos de rastreo.

## Checklist

### 1. Bloqueante: dominio base

- [x] `astro.config.mjs:12` → cambiar `site` de `https://tomiban.github.io` a
      `https://tomasbanchio.com.ar`. Es la fuente de verdad de canonical y de
      cualquier URL absoluta que genere Astro.

### 2. Head de `src/pages/index.astro`

- [x] Agregar `<link rel="canonical" href="https://tomasbanchio.com.ar/" />`.
- [x] Agregar `og:image` (y `og:image:width`/`og:image:height`). Requiere una
      imagen social: exportar un PNG 1200×630 de la portada y dejarlo en
      `public/og.png`.
- [x] Agregar JSON-LD `Person` con `name`, `jobTitle`, `url`, `email`,
      `address` (localidad) y `sameAs` (GitHub/LinkedIn). Va en un
      `<script type="application/ld+json">` en el `<head>`.

### 3. Limpieza

- [x] `src/pages/index.astro:82` → borrar
      `<link rel="stylesheet" href="../styles/global.css" />`. Es un leftover:
      la línea 4 ya importa el CSS con Vite y este link apunta a
      `/styles/global.css`, que no existe en `public/` → 404 en consola.
- [x] Borrar `src/pages/index.astro.bak` (no se builda, pero es ruido).

### 4. Rastreo

- [x] Agregar `public/robots.txt` con `Sitemap: https://tomasbanchio.com.ar/sitemap.xml`.
- [x] Agregar `public/sitemap.xml` (el sitio es de una página: un solo `<url>`).
      Alternativa: integración `@astrojs/sitemap`, pero para un solo `url` un
      archivo estático es más liviano.

## Nice to have

- Migrar Keystatic/contenido.
- Cambiar el dominio en GitHub Pages / DNS.
- Performance y Core Web Vitals (no se midió).
- Audit de accesibilidad completo (solo se revisó el head y los headings).

## Criterio de aceptación

- `npm run build` sin errores.
- `grep -r "tomiban.github.io" src/ astro.config.mjs public/` sin resultados.
- Los previews de WhatsApp/Twitter muestran imagen, título y descripción.
- La consola del sitio no tiene 404 de assets.
