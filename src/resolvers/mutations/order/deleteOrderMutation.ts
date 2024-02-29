import { deleteOrderService } from '../../../services/order/deleteOrderService';
import { GraphQLError } from 'graphql';

export const deleteOrder = async (_: void, args: any) => {
    try {
        const { id } = args;
        await deleteOrderService(id);
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};