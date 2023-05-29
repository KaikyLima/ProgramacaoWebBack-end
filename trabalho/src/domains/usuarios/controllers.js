const prisma = require("../../../prisma");
const bcrypt = require("bcrypt");

async function postUser(request, response, next) {
    try {
        const {
            name,
            email,
            senha
        } = request.body;

        const emailExiste = (email) => {
            return prisma.users.findUnique({
                where: {
                    email,
                },
            });
        }


        /*if (emailExiste) {
            return response.status(400).json({
                message: "Email already is being used",
            });
        }*/

        const hashedPassword = bcrypt.hashSync(senha, 10);

        const savedUser = (user) => {
            prism.user.create({
                data: {
                    name : user.name,
                    email: user.email,
                    senha: user.hashedPassword
                },
            });
        }



       /* const savedUser = await  prisma.users.create({
            data: {
            name: name,
            email: email,
            senha: hashedPassword,
            },
        });

        */
        delete savedUser.senha;
        response.status(201).json({
            user: savedUser,
          });

    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    postUser
}

