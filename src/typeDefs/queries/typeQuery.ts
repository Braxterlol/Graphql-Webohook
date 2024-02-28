import { usuarios } from "./user/getUsers";

export const allQuerys : string  = `
type Query {
    ${usuarios}
}
`;