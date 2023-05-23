const express = require("express");
const productsRoutes = require("./routes/products")
const usersRoutes = require("./routes/users")
const healthRoutes = require("./routes/health")
const tarefaRoutes = require ("./routes/tarefas")

const server = express();
server.use(express.json());

server.use(healthRoutes.router);
server.use(productsRoutes.router);
server.use(usersRoutes.router);
server.use(tarefaRoutes.router);

module.exports = {server}
