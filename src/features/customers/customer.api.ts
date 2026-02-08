import { axiosInstance } from '@/api/axiosInstance'

export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
}

export const customerApi = {
  getAll: () => axiosInstance.get<Customer[]>('/customers'),

  getById: (id: string) => axiosInstance.get<Customer>(`/customers/${id}`),

  create: (data: Omit<Customer, 'id'>) =>
    axiosInstance.post<Customer>('/customers', data),

  update: (id: string, data: Partial<Customer>) =>
    axiosInstance.patch<Customer>(`/customers/${id}`, data),

  delete: (id: string) => axiosInstance.delete(`/customers/${id}`),
}
