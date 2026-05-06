// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://Manush104.github.io',
  base: '/wetpets-final',
  integrations: [sitemap()],
  output: 'server',
  adapter: cloudflare(),
  image: {
    domains: ['cdn.sanity.io', 'images.unsplash.com']
  }
});