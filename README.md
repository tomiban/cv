# tomiban.github.io

Sitio personal: el CV como servicio de teletexto. Una página, ocho páginas numeradas, celdas
fijas y direccionamiento por número (`P300`, `P600`, …).

Astro + Keystatic. El contenido vive en `content/` y se edita desde el CMS; el sitio se publica
como HTML estático en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev
```

Queda en `http://localhost:4321`.

## Teclado

| Tecla | Qué hace |
| --- | --- |
| `1` … `7` | Salta a perfil, experiencia, stack, proyectos, repos, estudios o contacto |
| `G` | Alterna el fósforo entre ámbar y verde (se recuerda en el navegador) |
| `↑` `↓` | Desplazan la página |

Sin JavaScript el documento se lee completo: el menú y los botones son enlaces.

## Contenido

El CMS está en `http://localhost:4321/keystatic` (solo en `npm run dev`). Cada colección escribe
YAML en `content/`:

| Dónde | Qué |
| --- | --- |
| `content/perfil`, `content/stack`, `content/contacto` | Singletons: perfil, stack y contacto |
| `content/experiencia` | Trabajos, con viñetas y orden |
| `content/proyectos-trabajo` | Proyectos profesionales: productos de empleadores (privados, sin enlaces) |
| `content/repos` | Proyectos personales: nombre, lenguaje, año de creación, descripción, repo y `demo` opcional. El orden lo da el campo `orden` |
| `content/estudios`, `content/certificados` | P700 |

En producción **no hay CMS**, y es a propósito: GitHub Pages solo sirve archivos estáticos y las
rutas del admin de Keystatic necesitan un servidor. La integración se monta únicamente cuando
corre `astro dev` (ver `astro.config.mjs`), así que el build queda 100 % prerenderizado. Para
editar desde el navegador contra GitHub habría que mudar el hosting a uno con SSR y registrar la
GitHub App de Keystatic.

## Build y publicación

```bash
npm run build     # dist/
npm run preview
```

Cada push a `main` dispara `.github/workflows/deploy.yml`, que construye y publica en Pages.

## Estructura

```
src/pages/index.astro     la página; lee el contenido con createReader
src/styles/global.css     sistema visual (celdas, inversos, teclas de color)
public/app.js             reloj, salto por página, subpáginas y contador
public/fonts/             Jersey 15 (OFL), auto-hospedada
keystatic.config.ts       esquema del contenido
PRODUCT.md                verdad del producto (para trabajo de diseño asistido)
DESIGN.md                 el sistema visual registrado
```
