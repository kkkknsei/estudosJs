function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        peso,
        altura,
        get imc() {//Getter
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

/* const p1 = criaPessoa('Pedro', 'Correia', 1.84, 75);
console.log(p1.imc);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
 */

const p1 = criaPessoa('Pedro', 'Correia', 1.84, 75);
const p2 = criaPessoa('Luiz', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Júnior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);