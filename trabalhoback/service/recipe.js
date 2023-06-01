const prisma = require("../db/prisma");  


const getAllRecipes = (email) => {  
  return prisma.recipe.findMany();
}

const createRecipe = ({ nome, descricao, tempoPreparo, userId }) => {  
  
  return prisma.recipe.create({
    data: {
      nome,
      descricao,
      tempoPreparo,
      userId
    }
  });
}

const updateRecipe = (id, { nome, descricao,tempoPreparo, userId }) => {  

  return prisma.recipe.update({
    where: { id: id },
    data: {
      nome,
      descricao,
      tempoPreparo,
      userId
    }
  });
};

const deleteRecipe = (id) => { 
  return prisma.recipe.delete({
    where: { id: id}
  })
}

module.exports = {  
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}