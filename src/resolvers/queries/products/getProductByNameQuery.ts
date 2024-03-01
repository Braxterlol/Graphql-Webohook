import { getProductsName } from "../../../services/products/getProductsByName";
import { GraphQLError } from "graphql";

export const getProductName = async (name: string) => {
    try {
        const users = await getProductsName(name);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};