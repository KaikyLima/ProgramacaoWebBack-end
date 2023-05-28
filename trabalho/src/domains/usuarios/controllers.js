const prisma = require("../../../prisma");
const bcrypt = require("bcrypt");

async function postUser(request, response, next) {
    try {
        const {
            name,
            email,
            senha
        } = request.body;

        const emailExiste = await prisma.users.findUnique({
            where: {
                email,
            },
        });

        if(emailExiste) {
            response.status(400)
                .json({
                    message: "Email already is being used",
                });
        }

        const hashedPassword = bcrypt.hashSync(senha, 10);

        const savedUser = await  prisma.users.create({
            data: {
            name: name,
            email: email,
            senha: hashedPassword,
            },
        });
        delete savedUser.senha;
        response.status(201).json({
            user: savedUser,
          });

    } catch(error) {
        next(error);
    }
}

module.exports = {
    postUser
}

