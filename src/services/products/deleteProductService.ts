import * as ProductoRepository from "../../repositories/productRepository";

export const deleteProductService = async (id: number) : Promise<number> => {
    try {
        await ProductoRepository.deleteProduct(id);
        return id;
    } catch (error: any) {
        throw new Error(error);
    }
}