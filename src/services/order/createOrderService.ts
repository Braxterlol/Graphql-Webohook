import { Order } from '../../entities/orderProduct';
import * as OrderRepository from '../../repositories/orderRepository';
import { notifyEvent } from '../../utils/notifyEvent';

export const createOrderService = async (id_producto: number, amount: number) : Promise<Order> => {
    try {
        console.log(id_producto);
        const id = await OrderRepository.createOrder(id_producto, amount);
        notifyEvent(1);
        return {
            id,
            id_producto,
            amount
        }
    } catch (error: any) {
        throw new Error(error);
    }
};