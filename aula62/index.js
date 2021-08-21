const nome = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
/* const splice = nome.splice(3, 1);*/
/* console.log(nome, splice); */

const removidos = nome.splice(-2, Number.MAX_VALUE);
console.log(removidos);
removidos.splice(2, 0, 'Luiz');
nome.splice(2, 0, 'Pedro');
console.log(removidos, nome);

/*
nome.splice(-1, 1); pop
nome.splice(0, 1); shift
nome.splice(nome.lenght, 0, 'elemento1', 'elemento2', 'elemento3'); push
nome.splice(0, 0, 'Luiz', 'Otávio'); unshift

*/