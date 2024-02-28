import { getUserService } from "../../../services/user/getUserService";
import { GraphQLError } from "graphql";

export const usuarios = async () => {
    try {
        const users = await getUserService();
        return users;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};