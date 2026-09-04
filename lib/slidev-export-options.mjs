export const DEFAULT_EXPORT_WAIT_MS = 1000

export function withDefaultExportWait(args) {
  const hasExplicitWait = args.some(arg => arg === '--wait' || arg.startsWith('--wait='))
  if (hasExplicitWait)
    return args

  return [...args, '--wait', String(DEFAULT_EXPORT_WAIT_MS)]
}
