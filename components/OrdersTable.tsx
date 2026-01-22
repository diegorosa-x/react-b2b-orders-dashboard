'use client';

import { useState } from 'react';
import { useOrdersStore } from '../store/ordersStore';
import { OrderStatus } from '../types/order';
import { ActionsMenu } from './ActionsMenu';

const statusColors: Record<OrderStatus, string> = {
  'Pendente': 'bg-yellow-100 text-yellow-800',
  'Em andamento': 'bg-blue-100 text-blue-800',
  'Concluído': 'bg-green-100 text-green-800',
};

export const OrdersTable = () => {
  const orders = useOrdersStore((state) => state.orders);
  const updateStatus = useOrdersStore((state) => state.updateStatus);

  const [filter, setFilter] = useState<OrderStatus | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const filteredOrders =
    filter === 'All' ? orders : orders.filter((order) => order.status === filter);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + ordersPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <div className="mb-4 flex gap-2 flex-wrap">
        {['All', 'Pendente', 'Em andamento', 'Concluído'].map((status) => (
          <button
            key={status}
            className={`px-3 py-1 rounded ${
              filter === status
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-zinc-700 text-black dark:text-white'
            }`}
            onClick={() => {
              setFilter(status as OrderStatus | 'All');
              setCurrentPage(1);
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-zinc-800">
              <th className="text-left p-3 rounded-tl-lg">Cliente</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Itens</th>
              <th className="text-left p-3">Total</th>
              <th className="text-left p-3">Criado em</th>
              <th className="text-left p-3">Última Atualização</th>
              <th className="text-left p-3 rounded-tr-lg">Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
              >
                <td className="p-3 font-medium">{order.customer}</td>
                <td className="p-3">{order.email || '—'}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3">{order.itemsCount || 0}</td>
                <td className="p-3">R$ {order.total?.toFixed(2) || '0,00'}</td>
                <td className="p-3">{order.createdAt || '—'}</td>
                <td className="p-3">{order.updatedAt || '—'}</td>
                <td className="p-3">
                  <ActionsMenu order={order} updateStatus={updateStatus} />
                </td>
              </tr>
            ))}

            {currentOrders.length === 0 && (
              <tr>
                <td colSpan={8} className="p-3 text-center text-gray-500 dark:text-gray-400">
                  Nenhum pedido encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-gray-700 dark:text-gray-200">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 disabled:opacity-50"
          >
            Próximo
          </button>
        </div>
      )}
    </div>
  );
};
