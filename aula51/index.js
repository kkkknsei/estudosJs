/* function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome};
}

console.log(criaPessoa('Pedro', 'Correia'));
 */

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadruplica(2));