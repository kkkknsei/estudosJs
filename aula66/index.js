/* const numeros = [5, 60, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

//const total = numeros.reduce((acum, value) => acum + value);

const parEmPar = numeros.reduce((acum, value) => {
    if (value % 2 === 0) acum += value;

    return acum;
}, 0);

console.log(parEmPar); */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 75 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 22},
    { nome: 'Wallace', idade: 47 }
];

const maisVelha = pessoas.reduce((acum, obj) => {

    if (obj.idade > acum.idade) {
        acum = obj;
    }

    return acum;
});

console.log(maisVelha);