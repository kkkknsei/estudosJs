import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/login";
import Form from "./modules/form";

const login = new Login(".form-login");
const cadastro = new Login(".form-cadastro");

const form = new Form(".form-contato");

login.init();
cadastro.init();
form.init();

// import './assets/css/style.css';
