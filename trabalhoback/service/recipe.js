const prisma = require("../db/prisma");  


const getAllRecipes = () => {  
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
    where: { id },
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
    where: { id }
  })
}

module.exports = {  
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}