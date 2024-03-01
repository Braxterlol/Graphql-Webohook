import { createOrderService } from "../../../services/order/createOrderService";
import { GraphQLError } from "graphql";

export const createOrder = async (id_producto: number, amount: number) => {
    try {
        const users = await createOrderService(id_producto, amount);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};