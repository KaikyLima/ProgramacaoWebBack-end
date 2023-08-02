const prisma = require("./prisma"); 

const procurarEmail = (email) => {
    return prisma.usuario.findUnique({ 
        where: email, 
    });
};

const saveUsuario = (usuario) => { 
    return prisma.usuario.create({
        data: usuario,
    })
}

module.exports = { procurarEmail, saveUsuario};