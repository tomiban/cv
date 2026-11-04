# Sitio Web Personal

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

## Contacto por WhatsApp (Turnstile + Worker)

El número de WhatsApp no está en el repo ni en el HTML. Los botones apuntan a un `mailto` y, si
`content/contacto` tiene `turnstileSiteKey`, `public/contacto.js` intercepta el clic: Cloudflare
Turnstile comprueba que sea una persona y el Worker de `worker/` valida el token y devuelve el
número. Si algo falla, el botón abre el mail.

Puesta en marcha (una sola vez, en la cuenta de Cloudflare del dominio):

1. Turnstile → *Add widget* → dominio `tomasbanchio.com.ar`, modo *Managed*. Copiar la site key a
   `turnstileSiteKey` en `content/contacto/index.yaml` (o desde Keystatic).
2. Desplegar el Worker y cargar sus secrets:

```bash
cd worker
npx wrangler login
npx wrangler deploy
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put WHATSAPP_NUMBER
```

La ruta `tomasbanchio.com.ar/api/contacto` necesita que el dominio siga con el proxy de Cloudflare
activo (nube naranja).

## Build y publicación

```bash
npm run build     # dist/
npm run preview
```

Cada push a `main` dispara `.github/workflows/deploy.yml`, que construye y publica en Pages.

## Estructura

```
src/pages/index.astro     la página; lee el contenido con createReader
src/styles/global.css     sistema visual (papel, tinta y ámbar)
public/contacto.js        botones de WhatsApp con Turnstile
public/fonts/             Jersey 15 (OFL), auto-hospedada; la firma del pie
worker/                   Worker de Cloudflare para /api/contacto
keystatic.config.ts       esquema del contenido
PRODUCT.md                verdad del producto (para trabajo de diseño asistido)
DESIGN.md                 el sistema visual registrado
```
