import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretJWT = process.env.SECRET_JWT || "";

export const verifyToken = (token: string) => {
    try {
        if(token){
            const user : any = jwt.verify(token, secretJWT);
            return user;
        }
        throw new Error('Token inexistente');
    } catch (error: any) {
        throw new Error(error);
    }
};