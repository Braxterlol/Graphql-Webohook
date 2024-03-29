import { db } from "../config/db";
import { Product } from "../entities/productEntity";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const query = "select * from products";
        const result = await db.execute(query);
        return result[0] as Product[];
    } catch (err: any) {
        throw new Error(err);
    }
};

export const getByName = async (name: string): Promise<Product> => {
    try {
        const query = "select * from users where name = ?";
        const result: any = await db.execute(query, [name]);
        return result[0].length > 0 ? result[0][0] : null;
    } catch (err: any) {
        throw new Error(err);
    }
};

export const getByStok = async (stock: number): Promise<Product> => {
    try {
        const query = "select * from products where stock = ?";
        const result: any = await db.execute(query, [stock]);
        return result[0].length > 0 ? result[0][0] : null;
    } catch (err: any) {
        throw new Error(err);
    }
};

export const getByPrice = async (price: number): Promise<Product> => {
    try {
        const query = "select * from products where price = ?";
        const result: any = await db.execute(query, [price]);
        return result[0].length > 0 ? result[0][0] : null;
    } catch (err: any) {
        throw new Error(err);
    }
};

export const createProduct = async (name: string, stock: number, price: number) : Promise<number> => {
    try {
        const query = 'INSERT INTO products (name, stock, price) VALUES (?,?,?)';
        const result : any = await db.execute(query, [name, stock, price]);
        return result[0].insertId;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const updateProduct = async (id: number, name: string, stock: number, price: number) : Promise<void> => {
    try {
        console.log(id, name, stock, price);
        const query = 'UPDATE products SET name = ?, stock= ?, price = ? WHERE id = ?';
        await db.execute(query,[name, stock, price, id]);
    } catch (error: any) {
        throw new Error(error);
    }
};

export const deleteProduct = async (id: number) : Promise<void> => {
    try {
        const query = 'DELETE FROM products WHERE id = ?';
        await db.execute(query,[id]);
    } catch (error: any) {
        throw new Error(error);
    }
}