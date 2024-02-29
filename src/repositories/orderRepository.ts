import { db } from "../config/db";



export const createOrder = async (id_producto: number, amount: number) : Promise<number> => {
    try {
        console.log(id_producto, amount);
        const query = 'INSERT INTO orderProduct (id_product, amount) VALUES (?,?)';
        const result : any = await db.execute(query, [id_producto, amount]);
        return result[0].insertId;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const updateOrder= async (id: number, id_producto: number, amount: number) : Promise<void> => {
    try {
        const query = 'UPDATE orderProduct SET id_product = ?, amount = ? WHERE id = ?';
        await db.execute(query,[id_producto, amount, id]);
    } catch (error: any) {
        throw new Error(error);
    }
};

export const deleteOrder = async (id: number) : Promise<void> => {
    try {
        const query = 'DELETE FROM orderProduct WHERE id = ?';
        await db.execute(query,[id]);
    } catch (error: any) {
        throw new Error(error);
    }
}