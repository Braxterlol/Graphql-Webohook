import { db } from "../config/db";

export const createWebhook = async (
  id_usuario: number,
  url: string
): Promise<number> => {
  try {
    const query = "INSERT INTO webhook (id_user, url) VALUES (?,?)";
    const result : any = await db.execute(query, [id_usuario, url]);
    return result[0].insertId;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createEvent = async (name: string): Promise<number> => {
  try {
    const query = "INSERT INTO event (name) VALUES (?)";
    const result: any = await db.execute(query, [name]);
    return result[0].insertId;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createWebhookEvent = async (
  id_webhook: number,
  id_event: number
): Promise<number> => {
  try {
    const query =
      "INSERT INTO webhook_event (id_webhook, id_event) VALUES (?,?)";
    const result : any = await db.execute(query, [id_webhook, id_event]);
    return result[0].insertId;
  } catch (error: any) {
    throw new Error(error);
  }
};
