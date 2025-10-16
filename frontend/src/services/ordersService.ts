import api from './api';
import { Order, PaginatedResponse } from '@/types';

export interface QueryOrdersParams {
  page?: number;
  limit?: number;
  status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
}

export interface UpdateOrderStatusDto {
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
}

export const ordersService = {
  getAll: async (params?: QueryOrdersParams): Promise<PaginatedResponse<Order>> => {
    const response = await api.get<PaginatedResponse<Order>>('/orders', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Order> => {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
  },

  updateStatus: async (id: string, data: UpdateOrderStatusDto): Promise<Order> => {
    const response = await api.patch<Order>(`/orders/${id}/status`, data);
    return response.data;
  },
};


