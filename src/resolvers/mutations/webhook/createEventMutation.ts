import { createEventService } from "../../../services/webhook/createEventService";
import { GraphQLError } from "graphql";

export const createEvent = async (_root: void, args: any) => {
    try {
        const { name } = args;
        const event = await createEventService(name);
        return event;
    } catch (error: any) {
        throw new GraphQLError(error);
    }
}