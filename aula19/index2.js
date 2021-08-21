function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
        };
}

const pessoa1 = criaPessoa('Pedro', 'Correia', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 57);
const pessoa3 = criaPessoa('Taynah', 'Silva', 26);
const pessoa4 = criaPessoa('Jean', 'Otávio', 32);

console.log(pessoa2.nome, pessoa2.sobrenome);