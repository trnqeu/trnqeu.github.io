// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sitemapGuard from './src/integrations/sitemap-guard.mjs';

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: process.env.SITE || 'https://trnq.eu',
  // Only use base path for GitHub Pages deployments
  // For Netlify/Vercel, leave this undefined (no base path)
  base: process.env.BASE_PATH || undefined,
  // sitemapGuard must come after sitemap(): it prunes the files sitemap() writes.
  integrations: [mdx(), sitemap(), sitemapGuard()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
  },
});
