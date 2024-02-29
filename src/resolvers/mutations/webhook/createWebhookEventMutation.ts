import { createWebhookEventService } from "../../../services/webhook/createWebhookEventService";
import { GraphQLError } from "graphql";

export const createWebhookEvent = async (_root: void, args: any) => {
    try {
        const { id_webhook, id_event } = args;
        const webhookEvent = await createWebhookEventService(id_webhook, id_event);
        return webhookEvent;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}