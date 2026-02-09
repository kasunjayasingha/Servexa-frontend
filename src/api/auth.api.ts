import { axiosInstance } from './axiosInstance'

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  user: {
    id: string
    email: string
    name: string
  }
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export const authApi = {
  login: (credentials: LoginCredentials) =>
    axiosInstance.post<AuthResponse>('/auth/login', credentials),

  logout: () => axiosInstance.post('/auth/logout'),

  forgotPassword: (email: string) =>
    axiosInstance.post('/auth/forgot-password', { email }),

  resetPassword: (token: string, password: string) =>
    axiosInstance.post('/auth/reset-password', { token, password }),

  register: (payload: RegisterPayload) =>
    axiosInstance.post<AuthResponse>('/auth/register', payload),
}
