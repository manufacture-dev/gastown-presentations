export const PUBLIC_PRESENTATIONS_BASE_URL = 'https://manufacture.dev/gastown-presentations/'

export const PRESENTATION_LOCALES = Object.freeze(['fr', 'en'])

const SUPPORTED_LOCALES = new Set(PRESENTATION_LOCALES)
const TALK_ROUTE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function normalizePresentationLocale(value, fallback = 'en') {
  const normalized = localeLanguage(value)
  if (SUPPORTED_LOCALES.has(normalized))
    return normalized

  const normalizedFallback = localeLanguage(fallback)
  return SUPPORTED_LOCALES.has(normalizedFallback) ? normalizedFallback : 'en'
}

export function parsePresentationLocale(search, fallback = 'en') {
  const params = search instanceof URLSearchParams
    ? search
    : new URLSearchParams(typeof search === 'string' ? search : '')

  return normalizePresentationLocale(params.get('lang'), fallback)
}

export function buildPresentationUrl(
  route,
  locale,
  baseUrl = PUBLIC_PRESENTATIONS_BASE_URL,
) {
  const normalizedRoute = normalizeTalkRoute(route)
  const normalizedLocale = normalizePresentationLocale(locale)
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const url = new URL(`${normalizedRoute}/`, normalizedBaseUrl)

  url.searchParams.set('lang', normalizedLocale)
  url.hash = '/1'

  return url.href
}

export function presentationQrCodeFilename(route, locale) {
  return `${normalizeTalkRoute(route)}.${normalizePresentationLocale(locale)}.png`
}

function localeLanguage(value) {
  if (typeof value !== 'string')
    return ''

  return value.trim().toLowerCase().replaceAll('_', '-').split('-')[0]
}

function normalizeTalkRoute(route) {
  if (typeof route !== 'string')
    throw new TypeError('A talk route is required')

  const normalized = route.trim().replace(/^\/+|\/+$/g, '')
  if (!TALK_ROUTE_PATTERN.test(normalized))
    throw new TypeError(`Invalid talk route: ${route}`)

  return normalized
}
