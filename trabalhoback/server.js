const express = require("express");
const server = express();

const userRouter = require("./routes/users")
const recipeRouter = require("./routes/recipe")

server.use(express.json());
server.use(userRouter)
server.use(recipeRouter)

module.exports = server;