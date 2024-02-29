import * as UserRepository from '../../repositories/userRepository';
import { User } from '../../entities/userEntity';

export const createUserService = async (email: string, password: string ) : Promise<User> =>  {
    try {
        const id : number = await UserRepository.createUser(email, password);
        return {
            id,
            email,
            password
        }
    } catch (error: any) {
        throw new Error(error);
    }
}