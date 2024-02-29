import * as ProductRepository from "../../repositories/productRepository";
import { Product } from "../../entities/productEntity";
import { notifyEvent } from '../../utils/notifyEvent';

export const createProductService = async (name: string, stock: number, price: number) : Promise<Product> => {
    try {
        const id = await ProductRepository.createProduct(name, stock, price);
        notifyEvent(1);
        return {
            id,
            name,
            stock,
            price
        }
    } catch (error: any) {
        throw new Error(error);
    }
}