import { deleteProductService } from '../../../services/products/deleteProductService';
import { GraphQLError } from "graphql";

export const deleteProduct = async (_: void, args: any) => {
    try {
        const { id } = args;
        await deleteProductService(id);
        return id;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}