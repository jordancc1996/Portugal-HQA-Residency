/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WEGLOT_API_KEY: string;
  readonly PUBLIC_INQUIRY_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
