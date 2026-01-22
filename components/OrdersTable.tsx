// src/components/OrdersTable.tsx
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
  const [filter, setFilter] = useState<OrderStatus | 'All'>('All');

  const filteredOrders =
    filter === 'All' ? orders : orders.filter((order) => order.status === filter);

  return (
    <div>
      {/* Filtro */}
      <div className="mb-4 flex gap-2">
        {['All', 'Pendente', 'Em andamento', 'Concluído'].map((status) => (
          <button
            key={status}
            className={`px-3 py-1 rounded ${
              filter === status
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-zinc-700 text-black dark:text-white'
            }`}
            onClick={() => setFilter(status as OrderStatus | 'All')}
          >
            {status}
          </button>
        ))}
      </div>

      <table className="w-full border-collapse shadow-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-zinc-800">
            <th className="text-left p-3">Cliente</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Criado em</th>
            <th className="text-left p-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr
              key={order.id}
              className="border-t hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              <td className="p-3">{order.customer}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-3">{order.createdAt || '—'}</td>
              <td className="p-3 flex justify-end">
                <ActionsMenu order={order} />
              </td>
            </tr>
          ))}

          {filteredOrders.length === 0 && (
            <tr>
              <td colSpan={4} className="p-3 text-center text-gray-500 dark:text-gray-400">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
