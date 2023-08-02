const express = require('express'); 
const zod = require("zod");
const { mostrarComics, updateComics, saveComics, deleteComics} = require('../database/posts'); 

const rotas = express.Router(); 

const PostSchema = zod.object({
    name:      zod.String(),
    issue:     zod.Int(),
    publisher: zod.String(),
    release_year:  zod.Int()
});

rotas.get("/posts", auth, async (req, res) => { 
    const tasks = await mostrarComics(req.usuarioId);       
    res.json({ 
        posts,
    });
});

rotas.post("/posts", auth, async (req, res) => {
    try {
        const posts = PostSchema.parse(req.body); 
        const usuarioId = req.usuarioId;
        const savedComics = await saveComics(posts, usuarioId); 
        res.status(201).json({
            task: savedComics, 
        });
    } catch (erro) {
        if(erro instanceof zod.ZodError) {
            return res.status(422).json({
                message: erro.errors, 
            });
        }
        res.status(500).json({ 
            message: "Servidor em erro",
        });
    }
})

rotas.put("/posts/:id", auth, async (req, res) => {
    try {
        const id = Number(req.params.id); 
        const posts = PostSchema.parse(req.body);
        const atualizarComics = await updateComics(id, posts); 
        res.json({
            post: atualizarComics, 
        });
    } catch (erro) {
        if(erro instanceof zod.ZodError) {
            return res.status(422).json({ 
                message: erro.errors, 
            });
        }
        res.status(500).json({ 
            message: "Servidor em erro",
        });
    }    
  });
  
  rotas.delete("/posts/:id", auth, async (req, res) => { 
    try {
        const id = Number(req.params.id);
        await deleteComics(id); 
        res.status(204).send(); 
    } catch (erro) {
        if(erro instanceof zod.ZodError) {
            return res.status(422).json({ 
                message: erro.errors, 
            });
        }
        res.status(500).json({
            message: "Servidor em erro",
        });
    }
  });

module.exports = rotas; 