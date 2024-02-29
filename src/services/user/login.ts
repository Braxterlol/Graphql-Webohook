import * as UserRepository from '../../repositories/userRepository';
import { createToken } from '../../utils/jwt/createToken';

export const loginService = async (email: string, password: string ) : Promise<string> => {
    try {
        const user = await UserRepository.getUserByEmail(email);
        if(user) {
            if (user.password == password ) {
                const payload = {
                    email,
                    password: user.password
                }
                const token = createToken(payload);
                return token;
            }
            throw new Error('Contraseña incorrecta');
        }
        throw new Error('El usuario no existe');
    } catch (error: any) {
        throw new Error(error);
    }
}