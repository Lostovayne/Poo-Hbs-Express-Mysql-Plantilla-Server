import { pool } from "../config/config.sql.js";
const connection = await pool.getConnection();

const GetAllBases = async (req, res) => {
    // try {
    //     const query = "SELECT 1+1 AS result";
    //     const [result] = await connection.execute(query);
    //     res.status(200).json({
    //         ok: true,
    //         msg: "Base de datos conectada correctamente",
    //         result,
    //     });
    // } catch (error) {
    //     res.status(500).json({
    //         ok: false,
    //         msg: "Error al conectarse a la base de datos",
    //         error: error.message,
    //     });
    // }
    res.render("home.handlebars");
};

export { GetAllBases };
