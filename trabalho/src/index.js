const express = require("express");
const usuarios = require("./domains/usuarios/routes");

const port = 8000;
const server = express();

server.use(express.json())

server.use("/usuarios", usuarios);

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
} )