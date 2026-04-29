// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://Manush104.github.io',
  base: '/wetpets-final',
  integrations: [sitemap()],
  image: {
    domains: ['cdn.sanity.io', 'images.unsplash.com']
  }
});