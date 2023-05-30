const express = require("express");
const server = express();

const userRouter = require("./routes/users")
const recipeRouter = require("./routes/recipe")
const authRouter = require("./routes/auth")

server.use(express.json());
server.use(userRouter)
server.use(recipeRouter)
server.use(authRouter)

module.exports = server;