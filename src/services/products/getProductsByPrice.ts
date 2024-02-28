import { Product } from "../../entities/products/productEntity";
import * as userRepository from "../../repositories/productRepository";

export const getProductsPrice = async (price: number): Promise<Product> => {
  try {
    const response = await userRepository.getByStok(price);
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};