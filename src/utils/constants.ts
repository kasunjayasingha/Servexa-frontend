export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'

export const ROUTES = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  SIGN_UP: '/sign-up',
  OIDC_CALLBACK: '/auth/callback',
  DASHBOARD: '/dashboard',
  CUSTOMERS: '/customers',
  CUSTOMER_DETAILS: '/customers/:id',
  INVENTORY: '/inventory',
} as const

export const OIDC_CONFIG = {
  AUTHORIZATION_ENDPOINT: import.meta.env.VITE_OIDC_AUTHORIZATION_ENDPOINT || '',
  LOGOUT_ENDPOINT: import.meta.env.VITE_OIDC_LOGOUT_ENDPOINT || '',
  CLIENT_ID: import.meta.env.VITE_OIDC_CLIENT_ID || '',
  SCOPE: import.meta.env.VITE_OIDC_SCOPE || 'openid profile email',
} as const

