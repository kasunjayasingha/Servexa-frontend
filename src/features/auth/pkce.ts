import { ROUTES, OIDC_CONFIG } from '@/utils/constants'
import { getTenantId } from '@/utils/tenant'

const PKCE_STORAGE_KEY = 'servexa_pkce'

interface StoredPkceState {
  verifier: string
  state: string
  redirectPath?: string
  redirectUri: string
}

function getCrypto() {
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    return window.crypto.subtle
  }
  throw new Error('Web Crypto API is not available in this environment')
}

function base64UrlEncode(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i += 1) {
    binary += String.fromCharCode(bytes[i])
  }
  return window
    .btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  const result: string[] = []
  const randomValues = new Uint8Array(length)
  window.crypto.getRandomValues(randomValues)
  for (let i = 0; i < length; i += 1) {
    result.push(charset[randomValues[i] % charset.length]!)
  }
  return result.join('')
}

async function createCodeChallenge(verifier: string) {
  const data = new TextEncoder().encode(verifier)
  const digest = await getCrypto().digest('SHA-256', data)
  return base64UrlEncode(digest)
}

export async function startPkceAuth(redirectPath: string = ROUTES.DASHBOARD) {
  if (typeof window === 'undefined') return

  if (!OIDC_CONFIG.AUTHORIZATION_ENDPOINT || !OIDC_CONFIG.CLIENT_ID) {
    // eslint-disable-next-line no-alert
    window.alert('Single sign-on is not configured. Please contact an administrator.')
    return
  }

  const redirectUri =
    import.meta.env.VITE_OIDC_REDIRECT_URI || `${window.location.origin}/auth/callback`

  const verifier = randomString(64)
  const state = randomString(32)
  const codeChallenge = await createCodeChallenge(verifier)

  const stored: StoredPkceState = {
    verifier,
    state,
    redirectPath,
    redirectUri,
  }

  window.sessionStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify(stored))

  const params = new URLSearchParams({
    client_id: OIDC_CONFIG.CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: OIDC_CONFIG.SCOPE,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    state,
  })

  const rawTenantParam = import.meta.env.VITE_OIDC_TENANT_PARAM
  const tenantParam = (rawTenantParam === undefined ? 'tenant' : String(rawTenantParam)).trim()
  const tenant = getTenantId()
  if (tenant && tenantParam) {
    params.set(tenantParam, tenant)
  }

  const separator = OIDC_CONFIG.AUTHORIZATION_ENDPOINT.includes('?') ? '&' : '?'
  window.location.href = `${OIDC_CONFIG.AUTHORIZATION_ENDPOINT}${separator}${params.toString()}`
}

export function consumePkceState(): StoredPkceState | null {
  if (typeof window === 'undefined') return null
  const raw = window.sessionStorage.getItem(PKCE_STORAGE_KEY)
  if (!raw) return null
  window.sessionStorage.removeItem(PKCE_STORAGE_KEY)
  try {
    return JSON.parse(raw) as StoredPkceState
  } catch {
    return null
  }
}

export function startOidcLogout() {
  if (typeof window === 'undefined') return

  if (!OIDC_CONFIG.LOGOUT_ENDPOINT) {
    return
  }

  const postLogoutRedirect =
    import.meta.env.VITE_OIDC_POST_LOGOUT_REDIRECT_URI ||
    `${window.location.origin}${ROUTES.LOGIN}`

  const params = new URLSearchParams({
    post_logout_redirect_uri: postLogoutRedirect,
  })

  if (OIDC_CONFIG.CLIENT_ID) {
    params.set('client_id', OIDC_CONFIG.CLIENT_ID)
  }

  const separator = OIDC_CONFIG.LOGOUT_ENDPOINT.includes('?') ? '&' : '?'
  window.location.href = `${OIDC_CONFIG.LOGOUT_ENDPOINT}${separator}${params.toString()}`
}

