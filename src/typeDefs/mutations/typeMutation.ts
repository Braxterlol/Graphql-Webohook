import { createWebhook } from "./webhook/createWebhook";
import { createEvent } from "./webhook/createEvent";

export const allMutations : string = `
type Mutation {
    ${createWebhook}
    ${ createEvent }
}
`; 