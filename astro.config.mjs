import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Keystatic's admin is made of server-rendered routes and this site is a static
// build published by GitHub Pages, so the CMS is a local authoring tool: it is
// mounted only while `astro dev` runs, and the production build stays fully
// prerendered, with no adapter and no secrets.
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://tomiban.github.io',
  integrations: [react(), ...(isDev ? [keystatic()] : [])],
});
