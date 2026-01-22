'use client';

import { useEffect, useState } from 'react';
import { Order, OrderStatus } from '../../types/order';

import { TableFilter } from '../../shared/TableList/TableFilter';
import { TablePagination } from '../../shared/TableList/TablePagination';
import { TableListSkeleton } from '@/shared/TableList/TableListSkeleton';

import { OrdersTableDesktop } from './OrdersTableDesktop';
import { OrdersTableMobile } from './OrdersTableMobile';

type OrdersTableProps = {
  orders: Order[];
};

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [filter, setFilter] = useState<OrderStatus | 'All'>('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const ordersPerPage = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredOrders = orders.filter((order) => {
    const matchStatus =
      filter === 'All' || order.status === filter;

    const q = search.toLowerCase();

    const matchSearch =
      order.id.toLowerCase().includes(q) ||
      order.customer?.toLowerCase().includes(q) ||
      order.email?.toLowerCase().includes(q);

    return matchStatus && matchSearch;
  });

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;

  const currentOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage
  );

  return (
    <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">

      <TableFilter<OrderStatus | 'All'>
        options={['All', 'Pendente', 'Em andamento', 'Concluído']}
        current={filter}
        onChange={(val) => {
          setFilter(val);
          setCurrentPage(1);
        }}
        search={search}
        onSearchChange={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
        searchPlaceholder="Buscar por pedido, nome ou email..."
      />

      {loading ? (
        <TableListSkeleton />
      ) : (
        <>
          <div className="hidden md:block">
            <OrdersTableDesktop orders={currentOrders} />
          </div>

          <div className="block md:hidden">
            <OrdersTableMobile orders={currentOrders} />
          </div>
        </>
      )}

      {!loading && (
        <TablePagination
          current={currentPage}
          total={totalPages}
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        />
      )}
    </div>
  );
};
