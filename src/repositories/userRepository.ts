import { db } from "../config/db";
import { User } from "../entities/userEntity";

export const getUsers = async () : Promise<User[]> => {
  try {
    const query = "select * from users";
    const result = await db.execute(query);
    return result[0] as  User[];
  } catch (err: any) {
    throw new Error(err);
  }
}

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const query = "select * from users where email = ?";
    const result : any = await db.execute(query, [email]);
    return result[0].length > 0 ? result[0][0] : null;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getUserById = async (id: number): Promise<User> => {
  try {
    console.log(id);
    const query = "select * from users where id = ?";
    const result : any = await db.execute(query, [id]);
    return result[0].length > 0 ? result[0][0] : null;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createUser = async (
  email: string,
  password: string
): Promise<number> => {
  try {
    const query = "insert into users (email, password) values (?, ?)";
    const result : any = await db.execute(query, [email, password]);
    return result[0].insertId;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updateUser = async ( id: number, email: string, password: string): Promise<void> => {
  try {
    const query = 'UPDATE users SET email = ?, password = ? WHERE id = ?';
    await db.execute(query,[email, password, id]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    const query = 'DELETE FROM users WHERE id = ?';
    await db.execute(query,[id]);
  } catch (error: any) {
    throw new Error(error);
  }
}