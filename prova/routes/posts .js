const express = require ("express")
const { getAllPosts, createPosts, updatePosts, deletePosts } = require("../service/posts")
const auth = require("../middleware/auth")
const router = express.Router()
const z = require("zod")

const postsSchema = z.object({
  text: z.string(),
  
})

const postsIdSchema = z.number().int();
const postsPutSchema = z.number().int();

router.get("/posts", auth, async (req,res) =>{
  try {
    const user=req.user;
    const posts= await getAllPosts(user.email);
    res.json(posts);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        message: error.errors,
      });
    } 
  }
 });

router.post("/posts", async (req,res) =>{
  try {
    postsSchema.parse(req.body)
    const newposts = await createPosts(req.body)
    res.json(newposts)
  } catch(error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        message: error.errors,
      });
    }  res.status(500).json({
      message: "server error",
    });
  }
} )

router.put("/posts/:id", async(req,res) =>{
  try{
  const id = postsPutSchema.parse(Number(req.params.id))
  const updatedPosts=await updatePosts(id,req.body)

  res.json(updatedPosts)
  }catch(error){
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        message: error.errors,
      });
    }  res.status(500).json({
      message: "server error",
    });
  }

} )

router.delete("/posts/:id", async(req,res) =>{
  try{
    const id = postsIdSchema.parse(Number(req.params.id))
    const deletedPosts = await deletePosts(id)


    res.json(deletedPosts)
  }catch(error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        message: error.errors,
      });
    }  res.status(500).json({
      message: "server error",
    });
  }
} )

module.exports = router