import { deleteUserService } from "../../../services/user/deleteUserService";
import { GraphQLError } from "graphql";

export const deleteUser = async (_: void, args: any) => {
    try {
        const id = args.id
        await deleteUserService(id);
        return id;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}