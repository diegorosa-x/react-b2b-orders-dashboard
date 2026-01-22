export type OrderStatus = 'Pendente' | 'Em andamento' | 'Concluído';

export interface Order {
  id: string;
  customer: string;
  status: OrderStatus;
  createdAt?: string; 
}