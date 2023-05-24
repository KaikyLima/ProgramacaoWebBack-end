const prisma = require("../db/prisma");

const getAllUsers = () => {
  return prisma.user.findMany();
}

const createUser = ({name,email,age}) => {
  return prisma.user.create({
    data: {
      name,
      email,
      age,
      createdAt: new Date()
    }
  });
}

const updateUser = (userId,{name,email,age}) => {
  const id = Number(userId);

  return prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      age
    }
  });
}

const deleteUser = (userId) => {
  const id = Number(userId);

  return prisma.user.delete({
    where: { id }
  })
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}
