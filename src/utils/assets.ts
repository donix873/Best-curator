export function assetUrl(path: string): string
export function assetUrl(path: null | undefined): null
export function assetUrl(path: string | null | undefined): string | null
export function assetUrl(path: string | null | undefined): string | null {
  if (!path) return null
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
