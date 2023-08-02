const prisma = require("/prisma"); 

const mostrarComics = (usuarioId) => {
    return prisma.posts.findMany({
        where: { 
            usuarioId,
        },
    });
};

const saveComics = (posts, usuarioId) => { 
    return prisma.posts.create({ 
        data: {
            name: posts.name, 
            usuario: { 
                connect: {
                    id: usuarioId,
                }
            }
        }
    })
}

const updateComics = (id, posts) => { 
    return prisma.posts.update({
      where: {
        id: id, 
      },
      data: posts,
    });
  };
  
  const deleteComics = (id) => {
    return prisma.posts.delete({
      where: {
        id: id, 
      },
    });
  };

module.exports = {mostrarComics, saveComics, updateComics, deleteComics};