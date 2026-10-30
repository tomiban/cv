# Auditoría CWV + accesibilidad

Fecha: 2026-10-30
Entorno: `dist/` servido local con `python3 -m http.server` en `http://localhost:4321/`.
Herramienta: Lighthouse (Chrome headless), categorías performance, accessibility, best-practices y seo.

> El servidor local no comprime ni cachea como un CDN. Los avisos de cache y latencia
> no representan el deploy real en GitHub Pages.

## Scores

| Categoría | Score |
|-----------|-------|
| Performance | 100 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

## Core Web Vitals

| Métrica | Valor | Estado |
|---------|-------|--------|
| LCP (Largest Contentful Paint) | 1.1 s | Bueno |
| TBT (Total Blocking Time) | 0 ms | Bueno |
| CLS (Cumulative Layout Shift) | 0 | Bueno |
| FCP (First Contentful Paint) | 1.1 s | Bueno |
| Speed Index | 1.1 s | Bueno |

## Observaciones de performance (no bloqueantes)

- `cache-insight`: 12 KiB con cache corto. Es del servidor local; en producción lo resuelve el CDN de GitHub Pages.
- `document-latency-insight`: 15 KiB de ahorro estimado, mismo motivo.
- `render-blocking-insight`: ~150 ms de CSS bloqueante. Aceptable para un sitio de una página; no justifica inline crítico.

## Accesibilidad

Lighthouse no reporta fallos. Revisión manual del CSS:

- `prefers-reduced-motion` ya desactiva la animación del CRT (`global.css:768`).
- Estados `:focus-visible` definidos para links, botones, menú y filas.
- CRT decorativo con `aria-hidden="true"`.
- Skip link al inicio del body.

Pendiente de una auditoría manual con lector de pantalla (no cubierto por Lighthouse):
contraste en hover/foco y orden de tabulación del menú.

## Conclusión

No hay problemas de CWV ni de accesibilidad detectables automáticamente.
Las dos categorías quedan cerradas para el alcance actual.
