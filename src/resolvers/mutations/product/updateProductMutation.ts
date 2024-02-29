import { updateProductService } from '../../../services/products/updateProductService';
import { GraphQLError } from "graphql";

export const updateProduct = async (_: void, args: any) => {
    try {
        const { id, name, stock, price } = args;
        const product = await updateProductService(id, name, stock, price);
        return product;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}