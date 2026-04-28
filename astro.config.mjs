// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wetpets.in',
  adapter: cloudflare(),
  integrations: [sitemap()],
  image: {
    domains: ['cdn.sanity.io', 'images.unsplash.com']
  }
});