'use client';

import { useEffect } from 'react';
import { fetchOrders } from '../../services/ordersService';
import { useOrdersStore } from '../../store/ordersStore';
import { OrdersTable } from '../../components/OrdersTable/OrdersTable';
import { PageContainer } from '@/shared/PageContainer/PageContainer';

export default function OrdersPage() {
  const orders = useOrdersStore((state) => state.orders);
  const updateStatus = useOrdersStore((state) => state.updateStatus);
  const setOrders = useOrdersStore((state) => state.setOrders);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, [setOrders]);

  return (
      <PageContainer title="Lista de Pedidos" subtitle="Todos os pedidos cadastrados">
        <OrdersTable orders={orders} updateStatus={updateStatus} />
      </PageContainer>
  );
}
