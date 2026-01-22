import { Order } from '../types/order';

const mockOrders: Order[] = [
    { id: '1', customer: 'CAEPTOX', status: 'Pendente' },
    { id: '2', customer: 'SYNVIA', status: 'Em andamento' },
    { id: '3', customer: 'MOBIIS', status: 'Concluído' },
]

export const fetchOrders = async (): Promise<Order[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockOrders), 500);
    })
}