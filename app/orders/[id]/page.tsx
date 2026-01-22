'use client';

import { useParams } from 'next/navigation';
import { useOrdersStore } from '@/store/ordersStore';
import {
  getOrderDetails,
  getOrderProductDetails,
} from '@/shared/DetailCard/orderDetailsConfig';
import { DetailCard } from '@/shared/DetailCard/DetailCard';
import { Breadcrumb } from '@/shared/Breadcrumb/Breadcrumb';
import { PageLayout } from '@/components/PageLayout/PageLayout';
import { PageContainer } from '@/shared/PageContainer/PageContainer';

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const orders = useOrdersStore((state) => state.orders);

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <PageLayout>
        <PageContainer title="Detalhes do Pedido">
          <div className="p-6 text-center text-gray-500">
            Pedido não encontrado.
          </div>
        </PageContainer>
      </PageLayout>
    );
  }

  const orderDetails = getOrderDetails(order);
  const productDetails = getOrderProductDetails(order);

  const breadcrumbItems = [
    { label: 'Pedidos', href: '/' },
    { label: `Pedido #${order.id}` },
  ];

  return (
    <PageLayout>
      <PageContainer
        title="Detalhes do Pedido"
        subtitle="Informações completas do pedido"
      >
        <Breadcrumb items={breadcrumbItems} />

        <DetailCard items={orderDetails} />

        {productDetails.length > 0 && (
          <DetailCard title="Produtos" items={productDetails} />
        )}
      </PageContainer>
    </PageLayout>
  );
}
