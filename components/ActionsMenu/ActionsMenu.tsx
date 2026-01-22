'use client';

import { useState } from 'react';
import { useOrdersStore } from '../../store/ordersStore';
import { Order, OrderStatus } from '../../types/order';
import Link from 'next/link';
import { Tooltip } from '@/shared/Tooltip/Tooltip';

const statusColors: Record<OrderStatus, string> = {
  'Pendente': 'bg-yellow-100 text-yellow-800',
  'Em andamento': 'bg-blue-100 text-blue-800',
  'Concluído': 'bg-green-100 text-green-800',
};

interface ActionsMenuProps {
  order: Order;
}

export const ActionsMenu = ({ order }: ActionsMenuProps) => {
  const [open, setOpen] = useState(false);
  const updateStatus = useOrdersStore((state) => state.updateStatus);

  return (
    <div className="relative">
      <Tooltip label="Ações">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          ⋯
        </button>
      </Tooltip>

      {open && (
        <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded shadow-md z-10">
          <div className="px-2 py-1 border-b border-gray-100 dark:border-zinc-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold mb-1">
              Alterar Status
            </p>
            {(['Pendente', 'Em andamento', 'Concluído'] as OrderStatus[]).map(
              (statusOption) => (
                <button
                  key={statusOption}
                  onClick={() => {
                    updateStatus(order.id, statusOption);
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-2 py-1 rounded text-sm mb-1 ${
                    statusColors[statusOption]
                  }`}
                >
                  {statusOption}
                </button>
              )
            )}
          </div>

          <Link
            href={`/orders/${order.id}`}
            className="block px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 rounded"
            onClick={() => setOpen(false)}
          >
            Ver Detalhes
          </Link>
        </div>
      )}
    </div>
  );
};
