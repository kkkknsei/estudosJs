/* const numeros = [5, 60, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

const numerosMap = numeros.map((value) => value * 2);
console.log(numerosMap);

const numerosMap2 = numeros.map((value) => `Test -> ${value}`);
console.log(numerosMap2); */


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasNome = pessoas.map((obj) => obj.nome);
console.log(pessoasNome);

const pessoasIdade = pessoas.map(obj => ({ idade: obj.idade }));
console.log(pessoasIdade);

const pessoasId = pessoas.map(function (obj, key) {
    const newObj = { ...obj };
    newObj.id = key + 1;
    return newObj;
});
console.log(pessoasId);