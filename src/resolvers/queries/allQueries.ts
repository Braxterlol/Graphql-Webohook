import { usuarios } from "./user/getUsersQuery";
import { createUser } from "./user/createUserQuery";
import { deleteUser } from "./user/deleteUserQuery";
import { updateUser } from "./user/updateUserQuery";
import { deleteProduct } from "./products/deleteProductsQuery"
import { getProductName } from "./products/getProductByNameQuery"
import { getProductPrice } from "./products/getProductByPriceQuery"
import { getProductStock } from "./products/getProductByStockQuery"
import { getProducts } from "./products/getProductsQuery"
import { createOrder } from "./order/createOrderQuery"
import { deleteOrder } from "./order/deleteOrderQuery"
import { updateOrder } from "./order/updateOrderQuery"

export const Query = {
    usuarios,
    createUser,
    deleteUser,
    updateUser,
    deleteProduct,
    getProductName,
    getProductPrice,
    getProductStock,
    getProducts, 
    createOrder,
    deleteOrder,
    updateOrder
}