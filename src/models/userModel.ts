import { jwtSecret } from '../config/authConfig';

interface User {
  id: number;
  username: string;
  password: string;
}

export const UserModel = {
  async createUser(username: string, password: string): Promise<void> {
  
  },
  async getUserByUsername(username: string): Promise<User | null> {

  }
};
