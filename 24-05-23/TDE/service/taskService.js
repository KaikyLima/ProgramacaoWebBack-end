const prisma = require("../db/prisma");

const getAllTasks = () => {
  return prisma.task.findMany();
}

const createTask = ({title,description,isDone}) => {
  return prisma.task.create({
    data: {
      title,
      description,
      isDone,
      createdAt: new Date()
    }
  });
}

const updateTask = (taskId,{title,description,isDone}) => {
  const id = Number(taskId);

  return prisma.task.update({
    where: { id },
    data: {
      title,
      description,
      isDone: isDone || false
    }
  });
}

const deleteTask = (taskId) => {
  const id = Number(taskId);

  return prisma.task.delete({
    where: { id }
  })
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
}