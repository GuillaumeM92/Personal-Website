// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guillaume-merle.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // Anciennes adresses du site Django, pour ne pas casser les liens existants.
  redirects: {
    '/about': '/',
    '/portfolio': '/#projets',
    '/about-en': '/en/',
    '/portfolio-en': '/en/#projects',
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
    }),
  ],
});
