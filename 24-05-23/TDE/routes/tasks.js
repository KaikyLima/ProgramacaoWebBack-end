const express = require("express");
const { getAllTasks, createTask, updateTask, deleteTask } = require('../service/taskService');
const router = express.Router();

router.get("/tasks", async(req,res) => {
  const tasks = await getAllTasks();
  res.json({tasks})
});

router.post("/task", async(req,res) => {
  const newTask = await createTask(req.body)

  res.json(newTask)
});

router.put("/task/:id", async(req,res) => {
  const id = Number(req.params.id);

  const updatedTask = await updateTask(id,req.body);

  res.json(updatedTask)
});

router.delete("/task/:id", async(req,res) => {
  const id = Number(req.params.id);

  const deletedTask = await deleteTask(id);

  res.send(deletedTask)
});

module.exports = router;
