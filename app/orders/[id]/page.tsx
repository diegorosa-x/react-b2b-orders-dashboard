'use client';

import { useParams } from 'next/navigation';
import { useOrdersStore } from '../../../store/ordersStore';
import { OrderStatus } from '../../../types/order';

const statusColors: Record<OrderStatus, string> = {
  'Pendente': 'bg-yellow-100 text-yellow-800',
  'Em andamento': 'bg-blue-100 text-blue-800',
  'Concluído': 'bg-green-100 text-green-800',
};

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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <a
          href="/orders"
          className="text-blue-500 hover:underline font-medium"
        >
          ← Voltar
        </a>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Pedido #{order.id}
        </h1>
      </div>

      <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Cliente
          </h2>
          <p className="text-gray-900 dark:text-gray-50 font-medium">{order.customer}</p>
        </div>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Email
          </h2>
          <p className="text-gray-900 dark:text-gray-50 font-medium">{order.email || '—'}</p>
        </div>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Status
          </h2>
          <span className={`px-3 py-1 rounded ${statusColors[order.status]} font-medium`}>
            {order.status}
          </span>
        </div>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Itens
          </h2>
          <p className="text-gray-900 dark:text-gray-50 font-medium">{order.itemsCount}</p>
        </div>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Total
          </h2>
          <p className="text-gray-900 dark:text-gray-50 font-medium">${order.total}</p>
        </div>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Criado em
          </h2>
          <p className="text-gray-900 dark:text-gray-50 font-medium">{order.createdAt || '—'}</p>
        </div>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Última atualização
          </h2>
          <p className="text-gray-900 dark:text-gray-50 font-medium">{order.updatedAt || '—'}</p>
        </div>
      </div>

      {order.products && order.products.length > 0 && (
        <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Produtos
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-zinc-700">
            {order.products.map((prod) => (
              <li
                key={prod.id}
                className="flex justify-between py-3 text-gray-900 dark:text-gray-50"
              >
                <span>{prod.name}</span>
                <span>
                  {prod.quantity} × ${prod.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
