import { deleteUserService } from "../../../services/user/deleteUserService";
import { GraphQLError } from "graphql";

export const deleteUser = async (id: number) => {
    try {
        const users = await deleteUserService(id);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};