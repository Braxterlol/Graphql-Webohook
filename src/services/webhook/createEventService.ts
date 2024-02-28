import * as WebhookRepository from "../../repositories/webhookRepository";
import { Event } from "../../entities/eventEntity";

export const createEventService = async (name: string ) : Promise<Event> => {
    try {
        const id : number = await WebhookRepository.createEvent(name);
        return { 
            id,
            name
        };
    } catch (error: any) {
        throw new Error(error);
    }
};