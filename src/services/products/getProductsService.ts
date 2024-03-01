import { Product } from "../../entities/productEntity";
import * as userRepository from "../../repositories/productRepository";

export const getProductsService = async (): Promise<Product[]> => {
  try {
    const response = await userRepository.getProducts();
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};