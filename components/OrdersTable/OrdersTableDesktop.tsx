import { Order } from '../../types/order';
import { TableList } from '../../shared/TableList/TableList';
import { ordersColumns } from '../../shared/TableList/ordersColumnsConfig';

type Props = {
  orders: Order[];
};

export const OrdersTableDesktop = ({ orders }: Props) => {
  return (
    <TableList<Order>
      columns={ordersColumns()}
      data={orders}
    />
  );
};
