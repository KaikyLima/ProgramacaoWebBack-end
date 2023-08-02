const server = require("./server");
const user = require("./src/domains/users/routes")
const PORT = process.env.PORT || 8000;

server.use("/users", user);

server.listen(PORT,() => {
  console.log(`Servidor rodando na porta ${PORT}`);
});