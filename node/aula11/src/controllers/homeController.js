const HomeModel = require("../models/HomeModel");

//Tried doing a HomeModel.find() but for some reason it doesn't work properly'
HomeModel.create({ titulo: "teste4", descricao: "descricao4" })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
