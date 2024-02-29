import * as WebhookRepository from "../../repositories/webhookRepository";
import { Event } from "../../entities/eventEntity";
import { nofitifyEvent } from "../../utils/notifyEvent";

export const createEventService = async (name: string ) : Promise<Event> => {
    try {
        const id : number = await WebhookRepository.createEvent(name);
        nofitifyEvent(1);
        return { 
            id,
            name
        };
    } catch (error: any) {
        throw new Error(error);
    }
};