import { GraphQLError } from "graphql";
import { verifyToken } from "../utils/jwt/verifyToken";

export default async ({req, res}: any) => {
    if (req.body.operationName === "IntrospectionQuery") {
        return {};
      }
    if( req.body.query.includes("createUser") || req.body.query.includes('loginUser')) {
        return {}
    }
    const token = req.headers.authorization || ""; 
    const user = await verifyToken(token);

    if(!user) {
        throw new GraphQLError('Usuario no autenticado');
    }
    return { user };
};