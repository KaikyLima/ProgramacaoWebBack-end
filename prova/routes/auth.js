const express = require ("express");
const { getUserbyEmail } = require("../service/users");
const { user } = require("../db/prisma");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login",async(req,res) => {
    const{ email, password} = req.body;

    try{
        const user = await getUserbyEmail(email);
        if(!user) return res.status(401).json({ message: "Não autorizado"});
        
        const eIgual = bcrypt.compareSync(password, user.password);
        if(!eIgual) return res.status(401).json({message:"Não autorizado"});
        
        const payload = {
            user: {
              id: user.id,
              email: user.email
            }
          }
        
          console.log(payload)

        const token = jwt.sign(payload, process.env.SECRET);

        res.json({ token });
    } catch(erro) {
        return res.status(400).send("Credenciais inválidas")
    }
  })


module.exports = router