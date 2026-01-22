export type OrderStatus = 'Pendente' | 'Em andamento' | 'Concluído';

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customer: string;
  email?: string;
  status: OrderStatus;
  itemsCount: number;
  total: number;
  createdAt?: string;
  updatedAt?: string;
  products?: Product[];
}
