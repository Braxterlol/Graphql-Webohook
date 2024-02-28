import { Product } from "../../entities/products/productEntity";
import * as userRepository from "../../repositories/productRepository";

export const getProductsStock = async (stock: number): Promise<Product> => {
  try {
    const response = await userRepository.getByStok(stock);
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};