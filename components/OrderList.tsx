'use client';

import { useOrdersStore } from "@/store/ordersStore";

export const OrderList = () => {
  const orders = useOrdersStore((state) => state.orders);
  const updateStatus = useOrdersStore((state) => state.updateStatus);

  return (
    <div className="space-y-3">
      {orders.map((order) => (
        <div
          key={order.id}
          className="p-4 border rounded flex justify-between items-center"
        >
          <div>
            <p className="font-bold">{order.customer}</p>
            <p>Status: {order.status}</p>
          </div>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => updateStatus(order.id, 'Concluído')}
          >
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};
