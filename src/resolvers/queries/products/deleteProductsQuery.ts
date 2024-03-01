import { deleteProductService } from "../../../services/products/deleteProductService";
import { GraphQLError } from "graphql";

export const deleteProduct = async (id: number) => {
    try {
        const users = await deleteProductService(id);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};