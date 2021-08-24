exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome" />
    <button type="submit">Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Oi, sou sua nova rota de POST");
};
