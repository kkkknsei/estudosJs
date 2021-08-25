const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

//rotas da home
route.get("/", loginController.index);

// Rotas de login
route.get("/login/index", loginController.index); //'index' sempre será a primeira página de uma rota

route.post("/login/register", loginController.register);

module.exports = route;
