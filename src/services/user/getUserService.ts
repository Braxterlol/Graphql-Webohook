import { User } from "../../entities/user/userEntity";
import * as userRepository from "../../repositories/userRepository";

export const getUserService = async (): Promise<User[]> => {
  try {
    const response = await userRepository.getUsers();
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};