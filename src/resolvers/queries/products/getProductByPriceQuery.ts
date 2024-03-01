import { getProductsPrice } from "../../../services/products/getProductsByPrice";
import { GraphQLError } from "graphql";

export const getProductPrice = async (price: number) => {
    try {
        const users = await getProductsPrice(price);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};