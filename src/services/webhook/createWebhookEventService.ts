import * as WebhookRepository from '../../repositories/webhookRepository';
import { WebhookEvent } from '../../entities/webhookEvent';

export const createWebhookEventService = async (id_webhook: number, id_event: number) : Promise<WebhookEvent> => {
    try {
        const id : number = await WebhookRepository.createWebhookEvent(id_webhook, id_event);
        return {
            id,
            id_webhook,
            id_event
        }
    } catch (error: any) {
        throw new Error(error);
    }
}