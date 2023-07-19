import { createPool } from "mysql2/promise";
import { configDotenv } from "dotenv";
configDotenv();

const { DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 1000,
    queueLimit: 0,
});

try {
    const connection = await pool.getConnection();
    connection.release();
    console.log("Conectado a la base de datos correctamente...");
} catch (error) {
    console.log(" Error al conectar la base de datos: " + error.message);
}
