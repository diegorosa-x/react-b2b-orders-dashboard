import { Order } from "@/types/order";
import { ordersColumns } from "@/shared/TableList/ordersColumnsConfig";

export const OrdersTableMobile = ({ orders }: { orders: Order[] }) => {
  const columns = ordersColumns();

  return (
    <div className="space-y-3 p-2">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 text-sm"
        >
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="flex justify-between py-1 border-b last:border-b-0"
            >
              <span className="text-muted-foreground">
                {col.header}
              </span>

              <span className="font-medium text-right">
                {typeof col.accessor === "function"
                  ? col.accessor(order)
                  : String(order[col.accessor])}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
