import { getProductsService } from "../../../services/products/getProductsService";
import { GraphQLError } from "graphql";

export const getProducts = async () => {
    try {
        const users = await getProductsService();
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};