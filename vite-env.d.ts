/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TALK_ID?: string
  readonly VITE_TALK_ROUTE?: string
  readonly VITE_TALK_DATE?: string
  readonly VITE_TALK_VARIANT?: string
  readonly VITE_TALK_PROMPT?: string
  readonly VITE_DEFAULT_LOCALE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
