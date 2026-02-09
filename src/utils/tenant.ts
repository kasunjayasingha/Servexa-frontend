const DEFAULT_INTERNAL_SUBDOMAINS = ['internal', 'admin', 'staff']

function isIpAddress(hostname: string) {
  // simple IPv4 check
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)
}

export function getTenantId(): string {
  const explicit = import.meta.env.VITE_TENANT_ID
  if (explicit) return String(explicit)

  if (typeof window === 'undefined') return ''
  const hostname = window.location.hostname

  if (!hostname || hostname === 'localhost' || isIpAddress(hostname)) return ''

  const parts = hostname.split('.').filter(Boolean)
  if (parts.length < 3) return ''

  const subdomain = parts[0]!
  if (subdomain === 'www' || subdomain === 'app') return ''

  return subdomain
}

export function isInternalHostname(): boolean {
  if (typeof window === 'undefined') return false

  const hostname = window.location.hostname
  const parts = hostname.split('.').filter(Boolean)
  if (parts.length < 3) return false

  const subdomain = parts[0]!
  const configured = String(import.meta.env.VITE_INTERNAL_SUBDOMAINS || '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)

  const internalSubdomains = configured.length ? configured : DEFAULT_INTERNAL_SUBDOMAINS
  return internalSubdomains.includes(subdomain.toLowerCase())
}

