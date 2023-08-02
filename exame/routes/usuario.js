const express = require('express'); 
const zod = require("zod"); 
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 
const { procurarEmail, saveUsuario } = require('../database/usuario'); 

const rotas = express.Router(); 

const UsuarioSchema = zod.object({ 
    email: zod.string().email(),
    name: zod.string().min(3),
    password: zod.string().min(6),
})

const LoginSchema = zod.object({ 
    email: zod.string().email(), 
    password: zod.string(),
})

rotas.post("/register", async (req, res) => { 
    try {  
        const usuario = UsuarioSchema.parse(req.body);
        const emailEmUso = await procurarEmail(usuario.email) 
        if (emailEmUso) return res.status(400).json({ 
            message: "Email já está sendo utilizado por outro usuário!", 
        });
        const hashPassword = bcrypt.hashSync(usuario.password, 10);
        usuario.password = hashPassword; 
        const savedUsuario = await saveUsuario(usuario); 
        delete savedUsuario.password; 
        res.json({ usuario: savedUsuario }); 
    } catch (erro) {
    if(erro instanceof zod.ZodError) { 
        return res.status(422).json({ 
            message: erro.errors, 
        })
    }
    res.status(500).json({
        message: "Servidor em erro",
    })
    }
});

rotas.post("/login", async (req, res) => {
    try {
        const data = LoginSchema.parse(req.body); 
        const usuario =  await procurarEmail(data.email); 
        if (!usuario) return res.status(401).send(); 
        const verificarPassword = bcrypt.compareSync(data.password, usuario.password) 
        if (!verificarPassword) return res.status(401).send(); 
        const token = jwt.sign({ 
            usuarioId: usuario.id
        }, process.env.SECRET 
        );
        res.json({ 
            token,
        })
    } catch (erro) {
        if(erro instanceof zod.ZodError) { 
            return res.status(422).json({ 
                message: erro.errors, 
            })
        }
        res.status(500).json({ 
            message: "Servidor em erro",
        })
    }
})

module.exports = rotas; 