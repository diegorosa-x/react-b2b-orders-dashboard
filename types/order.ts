export type OrderStatus = 'Pendente' | 'Em andamento' | 'Concluído';

export interface Order {
  id: string;
  customer: string;
  email?: string;
  status: OrderStatus;
  itemsCount?: number;
  total?: number;
  createdAt?: string;
  updatedAt?: string;
}
