import { deleteOrderService } from "../../../services/order/deleteOrderService";
import { GraphQLError } from "graphql";

export const deleteOrder = async (id: number) => {
    try {
        const users = await deleteOrderService(id);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};