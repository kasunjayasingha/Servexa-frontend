import { getTenantId } from '@/utils/tenant'

export type SocialProvider = 'google' | 'github'

function getAuthBaseUrl() {
  const explicit = import.meta.env.VITE_AUTH_BASE_URL
  if (explicit) return String(explicit).replace(/\/+$/, '')

  const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'
  return String(apiBase).replace(/\/api\/?$/, '')
}

export function startSocialLogin(provider: SocialProvider) {
  if (typeof window === 'undefined') return

  const base = getAuthBaseUrl()
  const tenant = getTenantId()

  // Spring Security default: /oauth2/authorization/{registrationId}
  const url = new URL(`${base}/oauth2/authorization/${provider}`)
  if (tenant) url.searchParams.set('tenant', tenant)

  window.location.href = url.toString()
}

