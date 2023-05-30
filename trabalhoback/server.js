const express = require("express");
const server = express();

const userRouter = require("./routes/users")

server.use(express.json());
server.use(userRouter)

module.exports = server;