import { updateUserService } from "../../../services/user/updateUserService";
import { GraphQLError } from "graphql";

export const updateUser = async (id: number, email: string, password: string) => {
    try {
        const users = await updateUserService(id, email, password);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};