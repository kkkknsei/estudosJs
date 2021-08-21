const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
    .filter((value) => value % 2 ===0)
    .map((value) => value * 2)
    .reduce((acum, value) => acum + value);

console.log(numerosPares);

/* const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 75 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 22},
    { nome: 'Wallace', idade: 47 }
]; */