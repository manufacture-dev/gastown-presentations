export function resolveInitialPresentationLocale({
  defaultLocale,
  route,
  storedLocale,
  storedTalk,
}) {
  if (storedTalk === route && storedLocale)
    return storedLocale

  return defaultLocale
}
