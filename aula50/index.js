/* function funcao () {
    let total = -0;

    for (let valor of arguments) {
        total += valor;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); */

/* function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao(2, undefined, 20); */

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') {
            acumulador += numero;
        }
        if (operador === '-') {
            acumulador -= numero;
        }
        if (operador === '*') {
            acumulador *= numero;
        }
        if (operador === '/') {
            acumulador /= numero;
        }
    }

    console.log(acumulador);
};

conta('-', 200, 20, 30, 40, 50);