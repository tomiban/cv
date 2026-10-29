import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

// Keystatic's admin is made of server-rendered routes and this site is a static
// build published by GitHub Pages, so the CMS is a local authoring tool: it is
// mounted only while `astro dev` runs, and the production build stays fully
// prerendered, with no adapter and no secrets.
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://tomasbanchio.com.ar',
  // la barra flotante de desarrollo no debe tapar el diseño que se está revisando
  devToolbar: { enabled: false },
  integrations: [react(), sitemap(), ...(isDev ? [keystatic()] : [])],
});
