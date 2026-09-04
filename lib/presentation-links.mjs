export const PUBLIC_PRESENTATIONS_BASE_URL = 'https://manufacture.dev/gastown-presentations/'

const TALK_ROUTE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function buildPresentationUrl(
  route,
  baseUrl = PUBLIC_PRESENTATIONS_BASE_URL,
) {
  const normalizedRoute = normalizeTalkRoute(route)
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const url = new URL(`${normalizedRoute}/`, normalizedBaseUrl)

  url.hash = '/1'

  return url.href
}

export function presentationQrCodeFilename(route) {
  return `${normalizeTalkRoute(route)}.png`
}

function normalizeTalkRoute(route) {
  if (typeof route !== 'string')
    throw new TypeError('A talk route is required')

  const normalized = route.trim().replace(/^\/+|\/+$/g, '')
  if (!TALK_ROUTE_PATTERN.test(normalized))
    throw new TypeError(`Invalid talk route: ${route}`)

  return normalized
}
