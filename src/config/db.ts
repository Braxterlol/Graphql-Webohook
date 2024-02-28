import { ConnectionOptions, createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { config } from "dotenv";

config();

const connectionOption : ConnectionOptions = {
    //Configuración DB en servidor 
    port: 3306,
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD

    //Configuracion DB en local 
    
};

const connection : Connection = createConnection(connectionOption);

export const db = connection.promise();

