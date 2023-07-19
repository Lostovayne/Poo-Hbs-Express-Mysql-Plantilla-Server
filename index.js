import Server from "./app/server.js";

try {
    const server = new Server();
    server.listen();
} catch (error) {
    console.log("Error al iniciar el servidor", error);
}
