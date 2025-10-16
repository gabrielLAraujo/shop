import api from './api';
import { DashboardStats } from '@/types';
import { productsService } from './productsService';
import { ordersService } from './ordersService';

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    // Como não temos endpoint específico de stats, vamos buscar os dados necessários
    const [productsResponse, ordersResponse] = await Promise.all([
      productsService.getAll({ limit: 1000 }),
      ordersService.getAll({ limit: 5, page: 1 }),
    ]);

    const products = productsResponse.data;
    const lowStockProducts = products.filter((p) => p.stock < 10 && p.isActive).length;

    return {
      totalProducts: products.filter((p) => p.isActive).length,
      totalOrders: ordersResponse.meta.total,
      lowStockProducts,
      recentOrders: ordersResponse.data,
    };
  },
};


