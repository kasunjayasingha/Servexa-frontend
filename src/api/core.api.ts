import { axiosInstance } from './axiosInstance'

export const coreApi = {
  healthCheck: () => axiosInstance.get('/health'),
}
