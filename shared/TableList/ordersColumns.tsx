import { Order, OrderStatus } from '../../types/order';
import { ActionsMenu } from '../../components/ActionsMenu';
import React from 'react';

type Column<T> = {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode); // JSX é ReactNode
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

// Ajuste principal: tipagem explícita de props
const renderActions = (
  row: Order,
  updateStatus: (id: string, status: OrderStatus) => void
): React.ReactNode => {
  return <ActionsMenu order={row} updateStatus={updateStatus} />;
};

export const ordersColumns = (
  updateStatus: (id: string, status: OrderStatus) => void
): Column<Order>[] => [
  { header: 'Cliente', accessor: 'customer' },
  { header: 'Email', accessor: 'email' },
  { header: 'Status', accessor: (row) => renderStatus(row.status) },
  { header: 'Itens', accessor: 'itemsCount' },
  { header: 'Total', accessor: (row) => `R$ ${row.total?.toFixed(2) || '0,00'}` },
  { header: 'Criado em', accessor: 'createdAt' },
  { header: 'Última Atualização', accessor: 'updatedAt' },
  { header: 'Ações', accessor: (row) => renderActions(row, updateStatus) },
];
