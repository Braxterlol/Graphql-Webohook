import { createProductService } from "../../../services/products/createProductService";
import { GraphQLError } from "graphql";

export const createProduct = async (_: void, args: any) => {
    try {
        const { name, stock, price } = args;
        const product = await createProductService(name, stock, price);
        return product;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};