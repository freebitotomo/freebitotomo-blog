import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://freebitotomo.com',
  adapter: cloudflare()
});