const express = require("express")
const server = express()

server.get("/health", (req,res) => res.send("server is running"))
server.listen(3000)