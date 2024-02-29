import { loginService } from '../../../services/user/login';
import { GraphQLError } from 'graphql';

export const login = async (_: void,  args: any) => {
    try {
        const { email, password } = args;
        const token = loginService(email, password);
        return token;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};