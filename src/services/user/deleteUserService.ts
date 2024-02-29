import * as UserRepository from '../../repositories/userRepository';

export const deleteUserService = async (id: number) : Promise<number> => {
    try {
        await UserRepository.deleteUser(id);
        return id;
    } catch (error: any) {
        throw new Error(error);
    }
}

