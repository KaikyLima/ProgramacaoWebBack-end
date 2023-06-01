const prisma = require("../db/prisma");  


const getAllPosts = (email) => {  
  return prisma.posts.findMany();
}

const createPosts = ({ text,userId }) => {  
  
  return prisma.posts.create({
    data: {
      text,
      userId
    }
  });
}

const updatePosts = (id, { text, userId }) => {  

  return prisma.posts.update({
    where: { id: id },
    data: {
      text,
      userId
    }
  });
};

const deletePosts = (id) => { 
  return prisma.posts.delete({
    where: { id: id}
  })
}

module.exports = {  
  getAllPosts,
  createPosts,
  updatePosts,
  deletePosts,
}