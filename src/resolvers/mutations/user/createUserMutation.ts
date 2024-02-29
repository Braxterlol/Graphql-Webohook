import { createUserService } from "../../../services/user/createUserService";
import { GraphQLError } from "graphql";

export const createUser = async (_: void, args: any) => {
    try {
        const { email, password } = args; 
        const user = await createUserService(email, password);
        return user;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}