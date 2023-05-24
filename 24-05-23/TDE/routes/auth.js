const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getUserByLogin } = require('../service/userService');

router.post("/login", async(req,res) => {
  const { login, password } = req.body;

  try {
    const user = await getUserByLogin(login);
    if(!user) return res.status(401).json({ message: "Not Authorized" });

    const isEqual = bcrypt.compareSync(password, user.password);
    if(!isEqual) return res.status(401).json({ message: "Not Authorized" });

    const payload = {
      user: {
        id: user.id,
        login: user.login
      }
    }

    const token = jwt.sign(payload, process.env.SECRET);
    
    res.json({ token });
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: "Not Authorized" });
  }

})

module.exports = router;
