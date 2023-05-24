const express = require("express");
const server = express();

const tasksRouter = require('./routes/tasks');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

server.use(express.json());
server.use(tasksRouter);
server.use(userRouter);
server.use(usersRouter);

module.exports = server;

