import { GraphQLError } from "graphql";
import { createWebhookService } from "../../../services/webhook/createWebhookService";
import { Webhook } from "../../../entities/webhookEntity";

export const createWebhook = async (_root: void, args: any) => {
    try {
        const { id_usuario, url } = args;
        const res : Webhook  = await createWebhookService(id_usuario, url);
        return res;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
};