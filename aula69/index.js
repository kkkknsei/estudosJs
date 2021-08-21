/* const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Correia'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
 */

/* function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Pedro', 'Correia');
console.log(p1.nomeCompleto); */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // usar com cautela
}

const p1 = new Pessoa('Pedro', 'Correia');
console.log(p1);