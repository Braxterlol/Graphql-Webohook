import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secretJWT = process.env.SECRET_JWT || "";

export const createToken = (user: any) => {
    return jwt.sign(user, secretJWT);
}