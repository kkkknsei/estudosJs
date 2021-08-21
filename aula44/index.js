const testLogic = (x) => {

    const testType = (x) => {
        return typeof(x) === 'number' ? true : false;
    }

    if (testType(x) === true) {
        if ((x % 3) === 0 && (x % 5) === 0) {
            return 'FizzBuzz';
        } else if ((x % 3) === 0) {
            return 'Fizz';
        } else if ((x % 5) === 0) {
            return 'Buzz';
        } else {
            return x;
        }
    } else if (testType(x) === false) {
        return x;
    }
};

let lista = [];

function geraLista() {
    for (let i = 0; i <= 10; i++) {
        lista.push(Math.round(Math.random() * (100 - 0) + 0));
    }
}

geraLista();

for (elemento of lista) {
    console.log(`${elemento}: ${testLogic(elemento)}`);
}
