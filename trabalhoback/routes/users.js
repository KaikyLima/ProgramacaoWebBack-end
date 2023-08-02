const express = require ("express")
const { getAllUsers, createUser, updateUser, deleteUser } = require("../service/users")
const router = express.Router()
const z = require("zod")

const postSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string()
  
})

router.get("/user", async (req,res) =>{
  const users= await getAllUsers()
  res.json(users)
} )

router.post("/user", async (req,res) =>{
  const newuser = await createUser(req.body)
  res.json(newuser)
  
} )

router.put("/user/:id", async(req,res) =>{
  const userId=Number(req.params.id) 
  const updatedUser=await updateUser(userId,req.body)
  res.json(updatedUser)
} )

router.delete("/user/:id", async(req,res) =>{
  const userId=Number(req.params.id)
  const deletedUser=await deleteUser(userId,req.body)
  res.json(deletedUser)
} )

module.exports = router