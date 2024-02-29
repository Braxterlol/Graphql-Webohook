import { updateOrderService } from '../../../services/order/updateOrderService';
import { GraphQLError } from 'graphql';

export const updateOrder = async (_: void, args: any) => {
    try {
        const {id,  id_producto, amount} = args;
        const order = await updateOrderService(id, id_producto, amount);
        return order;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}