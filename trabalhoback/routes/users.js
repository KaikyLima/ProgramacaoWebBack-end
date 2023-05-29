const prisma = require("../db/prisma"); 


const getAllUsers = () => {  
  return prisma.user.findMany();
}

const createUser = ({ name, email, password }) => {  
  
  return prisma.user.create({
    data: {
      name,
      email,
      password
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

module.exports = {  
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
}