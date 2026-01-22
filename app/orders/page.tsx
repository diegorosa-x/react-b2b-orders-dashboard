'use client';

import { useEffect } from 'react';
import { fetchOrders } from '../../services/ordersService';
import { useOrdersStore } from '../../store/ordersStore';
import { OrderList } from '../../components/OrderList';

export default function OrdersPage() {
  const setOrders = useOrdersStore((state) => state.setOrders);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, [setOrders]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Orders Dashboard</h1>
      <OrderList />
    </div>
  );
}
