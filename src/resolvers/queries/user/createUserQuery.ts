import { createUserService } from "../../../services/user/createUserService";
import { GraphQLError } from "graphql";

export const createUser = async (email: string, password: string) => {
    try {
        const users = await createUserService(email, password);
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};