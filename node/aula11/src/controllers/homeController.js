exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send("Oi, sou sua nova rota de POST");
};
