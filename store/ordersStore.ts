import { create } from 'zustand';
import { Order, OrderStatus } from '../types/order';

interface OrdersState {
    orders: Order[];
    setOrders: (orders: Order[]) => void;
    updateStatus: (id: string, status: OrderStatus) => void;
}

export const useOrdersStore = create<OrdersState>((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
  updateStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status } : order
      ),
    })),
}));