import { isInternalHostname } from '@/utils/tenant'

export type AppAudience = 'internal' | 'customer' | 'mixed'

function getAppAudience(): AppAudience {
  const env = String(import.meta.env.VITE_APP_AUDIENCE || '').toLowerCase()
  if (env === 'internal' || env === 'customer' || env === 'mixed') return env
  if (isInternalHostname()) return 'internal'
  return 'mixed'
}

function getInternalEmailDomains(): string[] {
  return String(import.meta.env.VITE_INTERNAL_EMAIL_DOMAINS || '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

function emailDomain(email: string) {
  const at = email.lastIndexOf('@')
  if (at === -1) return ''
  return email.slice(at + 1).trim().toLowerCase()
}

export function isInternalUserEmail(email: string): boolean {
  const domains = getInternalEmailDomains()
  if (!domains.length) return false
  const domain = emailDomain(email)
  if (!domain) return false
  return domains.includes(domain)
}

export function shouldForceSsoOnly(email?: string): boolean {
  const audience = getAppAudience()
  if (audience === 'internal') return true
  if (email && isInternalUserEmail(email)) return true
  return false
}

