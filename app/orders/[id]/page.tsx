'use client';

import { useParams } from 'next/navigation';
import { useOrdersStore } from '../../../store/ordersStore';
import { getOrderDetails, getOrderProductDetails } from '@/shared/DetailCard/orderDetailsConfig';
import { DetailCard } from '@/shared/DetailCard/DetailCard';
import { Breadcrumb } from '@/shared/Breadcrumb/Breadcrumb';

export default function OrderDetailPage() {
  const { id } = useParams();
  const orders = useOrdersStore((state) => state.orders);
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        Pedido não encontrado.
      </div>
    );
  }

  const orderDetails = getOrderDetails(order);
  const productDetails = getOrderProductDetails(order);

  const breadcrumbItems = [
        { label: 'Pedidos', href: '/orders' },
        { label: `Pedido #${order.id}` },
    ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <a href="/orders" className="text-blue-500 hover:underline font-medium">← Voltar</a>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pedido #{order.id}</h1>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      <DetailCard items={orderDetails} />

      {productDetails.length > 0 && (
        <DetailCard title="Produtos" items={productDetails} />
      )}
    </div>
  );
}
