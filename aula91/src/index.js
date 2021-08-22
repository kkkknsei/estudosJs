// import * as meuModulo from "./modulo1";

import halfbaked, {
  nome,
  sobrenome,
  idade,
  soma,
  nomeCompleto,
} from "./modulo1";

/* const nome = "Pedro";

console.log(nomeCompleto(nome2, sobrenome));
console.log(nomeCompleto(nome, sobrenome));
console.log(soma(5, 5));
console.log(new Pessoa(nome, "Correia"));
 */

console.log(new halfbaked(nome, sobrenome));
console.log(nomeCompleto(nome, sobrenome));
