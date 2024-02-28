import { typeWebhook, typeUser, typeEvent } from "./entities";
import { allMutations } from "./mutations/typeMutation";
import { allQuerys } from "./queries/typeQuery";

export const typeDefs : string = typeWebhook + typeUser + typeEvent + allMutations + allQuerys ; 