const jwt = require("jsonwebtoken"); 

const auth = (req, res, next) => { 
    try {
        const autorizacao = req.headers.autorizacao;
        if (!autorizacao) return res.status(401).send(); 
        const token = autorizacao.split(" ")[1]; 
        const paiload = jwt.verify(token, process.env.SECRET); 
        req.usuarioId = paiload.userId; 
        next();
    } catch (erro) {
        res.status(401).send(); 
    }
}

module.exports = auth; 