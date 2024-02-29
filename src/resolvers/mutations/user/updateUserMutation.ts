import { updateUserService } from "../../../services/user/updateUserService";
import { GraphQLError } from "graphql";

export const updateUser = async (_: void, args: any) => {
    try {
        const { id, email, password} = args;
        const user = await updateUserService(id, email, password);
        return user;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}