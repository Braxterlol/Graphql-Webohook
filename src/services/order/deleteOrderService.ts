import * as OrderRepository from '../../repositories/orderRepository';

export const deleteOrderService = async (id: number) : Promise<number> => {
    try {
        await OrderRepository.deleteOrder(id);
        return id;
    } catch (error: any) {
        throw new Error(error);
    }
}