import * as WebhookRepository from "../../repositories/webhookRepository";
import { Webhook } from "../../entities/webhookEntity";

export const createWebhookService = async (
    id_usuario: number,
    url: string
) : Promise<Webhook> => {
 try {
    const id : number = await WebhookRepository.createWebhook(id_usuario, url);
    return {
        id,
        id_usuario,
        url
    }
 } catch (error: any) {
    throw new Error(error);
 }
}