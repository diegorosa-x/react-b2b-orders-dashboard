import { Order, OrderStatus } from '../../types/order';
import { ActionsMenu } from '../../components/ActionsMenu/ActionsMenu';
import React from 'react';

type Column<T extends object> = {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
};

const statusColors: Record<OrderStatus, string> = {
  'Pendente': 'bg-yellow-100 text-yellow-800',
  'Em andamento': 'bg-blue-100 text-blue-800',
  'Concluído': 'bg-green-100 text-green-800',
};

const renderStatus = (status: OrderStatus) => (
  <span className={`px-2 py-1 rounded ${statusColors[status]}`}>
    {status}
  </span>
);

export const ordersColumns = (): Column<Order>[] => [
  { header: 'Cliente', accessor: 'customer' },
  { header: 'Email', accessor: 'email' },
  { header: 'Status', accessor: (row) => renderStatus(row.status) },
  { header: 'Itens', accessor: 'itemsCount' },
  { header: 'Total', accessor: (row) => `R$ ${row.total?.toFixed(2) || '0,00'}` },
  { header: 'Criado em', accessor: 'createdAt' },
  { header: 'Última Atualização', accessor: 'updatedAt' },
  { header: 'Ações', accessor: (row) => <ActionsMenu order={row} /> },
];
