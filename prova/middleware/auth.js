const express = require ("express")
const jwt = require("jsonwebtoken")

const auth = (req,res,next) => {
    try {

        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];

        const payload = jwt.verify(token, process.env.SECRET);
        req.user = payload.user;
        next();
    }   catch (error) {
        res.status(401).send();
    }
}

module.exports = auth;