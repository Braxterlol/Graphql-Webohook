import { createOrderService } from '../../../services/order/createOrderService';
import { GraphQLError } from 'graphql';

export const createOrder = async (_: void, args: any) => {
    try {
        const { id_producto, amount } = args;
        console.log(id_producto);
        const order = await createOrderService(id_producto, amount);
        return order;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};