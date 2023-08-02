const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

router.get("/users", (req,res) => {
    res.send("Método get funcionou")
})

router.post("/users", (req,res) => {
    res.send("Méodo post funcionou")
})

router.put("/users", (req,res) => {
    res.send("Método PUT funcionou")
})

router.delete("/users", (req,res) => {
    res.send("Método DELETE funcionou")
})


module.exports = router;