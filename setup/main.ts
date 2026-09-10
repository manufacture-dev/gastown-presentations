import { defineAppSetup } from '@slidev/types'

import { resolveInitialPresentationLocale } from '../lib/presentation-locale.mjs'

interface TalkConfig {
  id: string
  route: string
  date: string
  defaultLocale: string
  variant: string
  prompt?: string
}

interface AppI18n {
  locale?: string | { value: string }
}

const talkModules = import.meta.glob('../talks/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, TalkConfig>

function getLatestTalk() {
  const [talk] = Object.values(talkModules)
    .sort((a, b) => b.date.localeCompare(a.date) || a.route.localeCompare(b.route))

  if (!talk)
    throw new Error('No talk definitions found in talks/*.json')

  return talk
}

const latestTalk = getLatestTalk()
const activeTalk = Object.values(talkModules).find(talk =>
  talk.id === import.meta.env.VITE_TALK_ID || talk.route === import.meta.env.VITE_TALK_ROUTE,
) || latestTalk
const activeVariant = import.meta.env.VITE_TALK_VARIANT || activeTalk.variant || 'full'

const talkConfig: TalkConfig = {
  id: import.meta.env.VITE_TALK_ID || activeTalk.id,
  route: import.meta.env.VITE_TALK_ROUTE || activeTalk.route,
  date: import.meta.env.VITE_TALK_DATE || activeTalk.date,
  defaultLocale: import.meta.env.VITE_DEFAULT_LOCALE || activeTalk.defaultLocale,
  variant: activeVariant,
  prompt: activeVariant === 'workshop' ? undefined : import.meta.env.VITE_TALK_PROMPT || activeTalk.prompt,
}

function capitalize(value: string) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value
}

function formatTalkDate(date: string, locale: string) {
  return capitalize(new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`)))
}

function setAppLocale(app: Parameters<Parameters<typeof defineAppSetup>[0]>[0]['app'], locale: string) {
  const i18n = app.config.globalProperties.$i18n as AppI18n | undefined

  if (i18n?.locale) {
    if (typeof i18n.locale === 'string')
      i18n.locale = locale
    else
      i18n.locale.value = locale
  }

  if (globalThis.document !== undefined)
    globalThis.document.querySelector('html')?.setAttribute('lang', locale)
}

// noinspection JSUnusedGlobalSymbols
export default defineAppSetup(({ app }) => {
  let initialLocale = talkConfig.defaultLocale

  if (globalThis.localStorage !== undefined) {
    const previousTalk = globalThis.localStorage.getItem('slidev-talk')
    const storedLocale = globalThis.localStorage.getItem('slidev-lang')

    initialLocale = resolveInitialPresentationLocale({
      defaultLocale: talkConfig.defaultLocale,
      route: talkConfig.route,
      storedLocale,
      storedTalk: previousTalk,
    })

    if (previousTalk !== talkConfig.route) {
      globalThis.localStorage.setItem('slidev-lang', talkConfig.defaultLocale)
      globalThis.localStorage.setItem('slidev-talk', talkConfig.route)
    }
  }

  setAppLocale(app, initialLocale)

  app.config.globalProperties.$variant = talkConfig.variant

  app.config.globalProperties.$talk = (key: string, values?: Record<string, unknown>) => {
    const t = app.config.globalProperties.$t
    const fullKey = `talks.${talkConfig.id}.${key}`

    if (typeof t !== 'function')
      return fullKey

    return values ? t(fullKey, values) : t(fullKey)
  }

  app.config.globalProperties.$talkDate = () => {
    const t = app.config.globalProperties.$t
    const locale = typeof t === 'function' ? t('common.locale') : talkConfig.defaultLocale

    return formatTalkDate(talkConfig.date, locale)
  }

  app.provide('talkConfig', talkConfig)
})
