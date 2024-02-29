import { typeWebhook, typeUser, typeEvent, typeWebhookEvent, typeProduct, typeOrder} from "./entities";
import { allMutations } from "./mutations/typeMutation";
import { allQuerys } from "./queries/typeQuery";

export const typeDefs : string =  typeUser + typeProduct + typeOrder +typeWebhook + typeEvent + typeWebhookEvent +allMutations + allQuerys ; 