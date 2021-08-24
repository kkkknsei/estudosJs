const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // TRATAMENTO DE REQUISIÇÕES HTTP

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="post">
  Nome do cliente: <input type="text" name="nome" /> /* nome utilizado abaixo */
  <button type="submit">Enviar</button>
  </form>
  `);
});

//?param1=param1&param2=param2&param3=param3
app.get("/testes/:idUsuarios?/:parametros?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post("", (req, res) => {
  console.log(req.body);
  res.send(`O que você enviou foi ${req.body.nome}`); // AQUI
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
