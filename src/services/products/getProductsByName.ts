import { Product } from "../../entities/productEntity";
import * as userRepository from "../../repositories/productRepository";

export const getProductsName = async (name: string): Promise<Product> => {
  try {
    const response = await userRepository.getByName(name);
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};