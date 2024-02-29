import * as UserRepository from '../../repositories/userRepository';
import { User } from '../../entities/userEntity';

export const updateUserService = async ( id: number, email: string, password: string ) : Promise<User> => {
    try {
       await UserRepository.updateUser(id, email, password);
       return {
        id,
        email,
        password
       }
    } catch (error: any) {
        throw new Error(error);
    }
};