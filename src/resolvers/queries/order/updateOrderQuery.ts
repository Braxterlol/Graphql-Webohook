import { updateOrderService } from "../../../services/order/updateOrderService";
import { GraphQLError } from "graphql";

export const updateOrder = async (id: number, id_producto: number, amount: number) => {
    try {
        const users = await updateOrderService(id, id_producto, amount);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};