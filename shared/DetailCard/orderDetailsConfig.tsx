import { Order, OrderStatus } from '@/types/order';
import React from 'react';

const statusColors: Record<OrderStatus, string> = {
  'Pendente': 'bg-yellow-100 text-yellow-800',
  'Em andamento': 'bg-blue-100 text-blue-800',
  'Concluído': 'bg-green-100 text-green-800',
};

export type DetailItem = {
  label: string;
  value: React.ReactNode;
};

export const getOrderDetails = (order: Order): DetailItem[] => [
  { label: 'Cliente', value: order.customer },
  { label: 'Email', value: order.email || '—' },
  {
    label: 'Status',
    value: <span className={`px-3 py-1 rounded ${statusColors[order.status]} font-medium`}>{order.status}</span>,
  },
  { label: 'Itens', value: order.itemsCount },
  { label: 'Total', value: `$${order.total}` },
  { label: 'Criado em', value: order.createdAt || '—' },
  { label: 'Última atualização', value: order.updatedAt || '—' },
];

export const getOrderProductDetails = (order: Order): DetailItem[] =>
  order.products?.map((prod) => ({
    label: prod.name,
    value: `${prod.quantity} × $${prod.price}`,
  })) || [];
