/* const numeros = [5, 60, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(value => value >= 10);

console.log(numerosFiltrados); */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasFiltrados = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasFiltrados);
const pessoasFiltrados2 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasFiltrados2);
const pessoaslFiltrados3 = pessoas.filter(obj => obj.nome.toLocaleLowerCase.endsWith('a'));
console.log(pessoaslFiltrados3);
