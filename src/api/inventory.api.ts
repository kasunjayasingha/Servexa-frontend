import { axiosInstance } from './axiosInstance'

export interface InventoryItem {
  id: string
  name: string
  sku: string
  quantity: number
  price: number
}

export const inventoryApi = {
  getAll: () => axiosInstance.get<InventoryItem[]>('/inventory'),

  getById: (id: string) => axiosInstance.get<InventoryItem>(`/inventory/${id}`),

  create: (data: Omit<InventoryItem, 'id'>) =>
    axiosInstance.post<InventoryItem>('/inventory', data),

  update: (id: string, data: Partial<InventoryItem>) =>
    axiosInstance.patch<InventoryItem>(`/inventory/${id}`, data),

  delete: (id: string) => axiosInstance.delete(`/inventory/${id}`),
}
