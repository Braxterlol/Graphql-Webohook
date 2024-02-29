import * as ProductoRepository from "../../repositories/productRepository";
import { Product } from "../../entities/productEntity";

export const updateProductService = async (id: number, name: string, stock: number, price: number) : Promise<Product> => {
    try {
        await ProductoRepository.updateProduct(id, name, stock, price);
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