const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Correia',
    idade: 25,
    endereco: {
        rua:'Rua Dr Roland Simons',
        numero: 123 }
};

for (key in pessoa) {
    if (typeof(pessoa[key]) === 'object' && pessoa[key] !== null) {
        console.log(`${key}: ${JSON.stringify(pessoa[key])}`);
    } else if (typeof(pessoa[key]) !== 'object' && pessoa[key] !== null) {
        console.log(`${key}: ${pessoa[key]}`);
    }
}