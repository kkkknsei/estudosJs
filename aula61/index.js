function* geradoraUm () {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

const g1 = geradoraUm();

/* for (let value of g1) {
    console.log(value);
} */

function* geradoraDois () {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

/* const g2 = geradoraDois();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value); */

function* geradoraTres() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradoraQuatro() {
    yield* geradoraTres();
    yield 3;
    yield 4;
    yield 5;
}

/* const g4 = geradoraQuatro();
for (let value of g4) {
    console.log(value);
} */

function* geradoraCinco() {
    yield function() {
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do y2')
    };
}

const g5 = geradoraCinco();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();