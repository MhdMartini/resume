// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served at the custom domain root (leverai.tech) via GitHub Pages.
// No `base` needed because it lives at the domain root, not a /repo/ subpath.
export default defineConfig({
  site: 'https://leverai.tech',
  integrations: [sitemap()],
  build: { assets: 'assets' },
});
