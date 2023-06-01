const prisma = require("../db/prisma"); 
const bcrypt = require("bcrypt")


const getAllUsers = () => {  
  return prisma.user.findMany();
}

const createUser = ({ name, email, password }) => {  
  const senhaCriptografada = bcrypt.hashSync(password, 10)
  return prisma.user.create({
    data: {
      name,
      email,
      password: senhaCriptografada
      
    }
  });
}

const updateUser = (id, { name, email,password }) => {  

  return prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      password
    }
  });
};

const deleteUser = (id) => { 
  return prisma.user.delete({
    where: { id }
  })
}

const getUserbyEmail = (email) => {
  return prisma.user.findFirst({
    where: { email }
  })
}

module.exports = {  
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserbyEmail,
}