// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Public URLs are generated from src/pages/*.astro as a single path segment.
// Content files may live in nested folders under src/content/pages/; those
// folders are not part of the public path ([slug].astro uses frontmatter slug).
const site = (process.env.PUBLIC_SITE_URL || 'https://www.portugalhqaresidency.com').replace(/\/$/, '');

export default defineConfig({
  site,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
        if (path.includes('style-guide')) return false;
        const segments = path.split('/').filter(Boolean);
        return segments.length <= 1;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
