const express = require('express'); 
const usuarioRotas = require("./routes/usuario"); 
const postsRotas = require("./routes/posts"); 

const server = express(); 

server.use(express.json()); 

server.use(usuarioRotas); 
server.use(postsRotas);

module.exports = server; 