/// <reference path="../.astro/types.d.ts" />

interface Env {
  MICROCMS_API_KEY: string;
  MICROCMS_SERVICE_DOMAIN: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
