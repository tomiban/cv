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
El CMS está en `http://localhost:4321/keystatic` (solo en `npm run dev`). Cada colección escribe
YAML en `content/`:

## Teclado

| Tecla | Qué hace |
| --- | --- |
| `1` … `6` | Salta a perfil, experiencia, profesionales, personales, estudios o contacto |
| `C` | Recorre los cuatro fósforos: ámbar, verde, rojo y cian (se recuerda en el navegador) |
| `↑` `↓` | Desplazan la página |

Sin JavaScript el documento se lee completo: el menú y los botones son enlaces.


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
