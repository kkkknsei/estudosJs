/* const nome = "Luiz";
const sobrenome = "Miranda";

const falaNome = () => {
  console.log(nome, sobrenome);
};

/* module.exports.nome = nome;
module.exports.sobreonme = sobrenome;
module.exports.falaNome = falaNome; */

/* exports.nome = nome;
exports.sobreonme = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar";

console.log(exports); */

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Luiz";
const sobrenome = "Miranda";

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};
