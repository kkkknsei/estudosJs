const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

/* const pessoas = [
  { nome: "Luiz", idade: 17 },
  { nome: "Maria", idade: 33 },
  { nome: "Eduardo", idade: 24 },
  { nome: "Luiza", idade: 62 },
];

escreve(caminhoArquivo, JSON.stringify(pessoas, "", 2)); */

async function lerArquivo(caminho) {
  const dados = await ler(caminho);

  return dados;
}

const dadosArquivo = lerArquivo(caminhoArquivo).then((dados) =>
  renderizaDados(dados)
);

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val));
  dados.forEach((val) => console.log(val.nome));
}
