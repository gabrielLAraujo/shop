import api from './api';
import { Product, PaginatedResponse } from '@/types';

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  stock: number;
  images?: string[];
  isActive?: boolean;
  categoryId: string;
}

export interface QueryProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  isActive?: boolean;
}

export const productsService = {
  getAll: async (params?: QueryProductsParams): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>('/products', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Product> => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  create: async (data: CreateProductDto): Promise<Product> => {
    const response = await api.post<Product>('/products', data);
    return response.data;
  },

  update: async (id: string, data: Partial<CreateProductDto>): Promise<Product> => {
    const response = await api.patch<Product>(`/products/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },

  addImages: async (id: string, imageUrls: string[]): Promise<Product> => {
    const response = await api.post<Product>(`/products/${id}/images`, { imageUrls });
    return response.data;
  },
};


