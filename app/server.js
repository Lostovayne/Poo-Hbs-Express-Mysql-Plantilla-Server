import express from "express";
import { configDotenv } from "dotenv";
import { baseRoutes } from "../routes/index.js";
import { engine } from "express-handlebars";

configDotenv();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        //path rutas
        this.pathBase = "/";
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        //hbs
        this.app.engine("handlebars", engine());
        this.app.set("view engine", "handlebars");
        this.app.use(express.static("public"));
        this.app.set("views", "./views");
    }

    routes() {
        this.app.use(this.pathBase, baseRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;
