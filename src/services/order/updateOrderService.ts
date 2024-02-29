import { Order } from '../../entities/orderProduct';
import * as OrderRepository from '../../repositories/orderRepository';

export const updateOrderService = async (id: number, id_producto: number, amount: number) : Promise<Order> => {
    try {
        await OrderRepository.updateOrder(id, id_producto, amount);
        return {
            id,
            id_producto,
            amount
        }
    } catch (error: any) {
        throw new Error(error);
    }
}