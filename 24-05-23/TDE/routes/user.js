const express = require("express");
const { getAllUsers, createUser, updateUser, deleteUser } = require('../service/userService');
const router = express.Router();

router.get("/users", async(req,res) => {
  const users = await getAllUsers();
  res.json({users})
});

router.post("/user", async(req,res) => {
  const newUser = await createUser(req.body)

  res.json(newUser)
});

router.put("/user/:id", async(req,res) => {
  const id = Number(req.params.id);

  const updatedUser = await updateUser(id,req.body);

  res.json(updatedUser)
});

router.delete("/user/:id", async(req,res) => {
  const id = Number(req.params.id);

  const deletedUser = await deleteUser(id);

  res.send(deletedUser)
});

module.exports = router;
