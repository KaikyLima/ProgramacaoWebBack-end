const express = require("express")
const server = express()
server.use(express.json()) 
var lista = []

server.get("/tasks", (req,res) => res.send(lista))

server.post("/tasks", (req, res) => {
    const {id,nome,descricao,isdone} = req.body
    lista.push({
        id,
        nome: nome,
        descricao: descricao,
        isdone
    })
    res.send(req.body)
})
server.put("/tasks/:id", (req,res) => {
    const id = Number(req.params.id)
    const {nome,descricao,isdone} = req.body
    
    lista.map((task, index) =>  {
        if(task.id === id){
            lista[index] = {
            id,
            nome: nome,
            descricao: descricao,
            isdone
            }
        }
    })
    res.send(req.body)
})
server.delete("/tasks/:id", (req,res) => {
    const id = Number(req.params.id)
    lista = lista.filter(task => task.id!=id)
    res.send("Desletado")
})
server.listen (8080)
