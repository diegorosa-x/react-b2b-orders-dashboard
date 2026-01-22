'use client';

import { useState } from 'react';
import { Order, OrderStatus } from '../types/order';

import { TableList } from '../shared/TableList/TableList';
import { TableFilter } from '../shared/TableList/TableFilter';
import { TablePagination } from '../shared/TableList/TablePagination';
import { ordersColumns } from '../shared/TableList/ordersColumns';

type OrdersTableProps = {
  orders: Order[];
  updateStatus: (id: string, status: OrderStatus) => void;
};

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [filter, setFilter] = useState<OrderStatus | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const filteredOrders =
    filter === 'All' ? orders : orders.filter((o) => o.status === filter);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + ordersPerPage);

  return (
    <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <TableFilter<OrderStatus | 'All'>
        options={['All', 'Pendente', 'Em andamento', 'Concluído']}
        current={filter}
        onChange={(val) => {
          setFilter(val as OrderStatus | 'All');
          setCurrentPage(1);
        }}
      />

      <TableList<Order>
        columns={ordersColumns()}
        data={currentOrders}
      />

      <TablePagination
        current={currentPage}
        total={totalPages}
        onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  );
};
