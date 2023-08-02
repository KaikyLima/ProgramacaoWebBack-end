const {digaOi, get} = require("./controllers")
const { Router } = require("express")


const route = Router();

route.get("/", digaOi)

route.get("/users", get)

route.post("/users", (req,res) => {
    res.send("Méodo post funcionou")
})

route.put("/users", (req,res) => {
    res.send("Método PUT funcionou")
})

route.delete("/users", (req,res) => {
    res.send("Método DELETE funcionou")
})

module.exports = route;