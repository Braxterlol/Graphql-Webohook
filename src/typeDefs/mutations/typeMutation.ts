import { createUser } from './user/createUser';
import { updateUser } from './user/updateUser';
import { deleteUser } from './user/deleteUser';
import { login } from './user/login';
import { createProduct } from './product/createProduct';
import { updateProduct } from './product/updateProduct';
import { deleteProduct } from './product/deleteProduct';
import { createOrder } from './order/createOrder';
import { updateOrder } from './order/updateOrder';
import { deleteOrder } from './order/deleteOrder';
import { createWebhook } from "./webhook/createWebhook";
import { createEvent } from "./webhook/createEvent";
import { createWebhookEvent } from "./webhook/createWebhookEvent";

export const allMutations : string = `
type Mutation {
    ${ createUser }
    ${ updateUser }
    ${ deleteUser }
    ${ login }
    ${ createProduct }
    ${ updateProduct }
    ${ deleteProduct }
    ${ createOrder } 
    ${ updateOrder }
    ${ deleteOrder }
    ${ createWebhook }
    ${ createEvent }
    ${ createWebhookEvent }
}
`; 