import { createUser } from "./user/createUserMutation";
import { updateUser } from "./user/updateUserMutation";
import { deleteUser } from "./user/deleteUserMutation";
import { login } from "./user/loginMutation";
import { createProduct } from "./product/createProductMutation";
import { updateProduct } from "./product/updateProductMutation";
import { deleteProduct } from "./product/deleteProductMutation";
import { createOrder } from "./order/createOrderMutation";
import { updateOrder } from "./order/updateOrderMutation";
import { deleteOrder } from "./order/deleteOrderMutation";
import { createWebhook } from "./webhook/createWebhookMutation";
import { createEvent } from "./webhook/createEventMutation";
import { createWebhookEvent } from "./webhook/createWebhookEventMutation";
 
export const Mutation = {
    createUser,
    updateUser,
    deleteUser,
    login,
    createProduct,
    updateProduct,
    deleteProduct,
    createOrder,
    updateOrder,
    deleteOrder,
    createWebhook,
    createEvent,
    createWebhookEvent
}; 
