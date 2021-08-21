/* const nomes = ['Luiz Otávio', 'Pedro Correia', 'Taynah Silva'];

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('###');

nomes.forEach(function (key, value) {
    console.log(key, value);
})

console.log('###');

for (let valor of nomes) {
    console.log(valor);
} */

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Correia',
    idade: 25,
}

for (let value in pessoa) {
    console.log(`${value}: ${pessoa[value]}`);
}