import { getProductsStock } from "../../../services/products/gteProductsByStock";
import { GraphQLError } from "graphql";

export const getProductStock = async (stock: number) => {
    try {
        const users = await getProductsStock(stock);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};