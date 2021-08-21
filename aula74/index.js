function cpfParseOne(multiplier, cpf) {
    return multiplier.reduce((acum, value, i) => {
        return acum + (value * cpf[i]);
    }, 0);
};

function cpfParseTwo(multiplier, cpf) {
    if ((11 - (cpfParseOne(multiplier, cpf) % 11)) < 0) {
        return 'Invalid'
    } else if ((11 - (cpfParseOne(multiplier, cpf) % 11)) > 9) {
        return 0;
    } else {
        return 11 - (cpfParseOne(multiplier, cpf) % 11);
    }
}

function cpfParseThree(multiplier, cpf) {
    return `${cpf}${cpfParseTwo(multiplier, cpf)}`;
};

function cpfParseFour(firstMultiplier, secondMultiplier, cpf) {
    const secondCpf = cpfParseThree(firstMultiplier, cpf);
    
    return secondCpfParsed = secondMultiplier.reduce((acum, value, i) => {
        return acum + (value * secondCpf[i]);
    }, 0);;
};

function cpfParseFive(firstMultiplier, secondMultiplier, cpf) {
    if ((11 - (cpfParseFour(firstMultiplier, secondMultiplier, cpf) % 11)) < 0) {
        return 'Invalid'
    } else if ((11 - (cpfParseFour(firstMultiplier, secondMultiplier, cpf) % 11)) > 9) {
        return 0;
    } else {
        return 11 - (cpfParseFour(firstMultiplier, secondMultiplier, cpf) % 11);
    }
}

function cpfParseSix(firstMultiplier, secondMultiplier, cpf) {
    return `${cpfParseThree(firstMultiplier, cpf)}${cpfParseFive(firstMultiplier, secondMultiplier, cpf)}`;
}    

// first and second multiplier arrays are necessary, don't mess it up.
const firstMultiplier = [10, 9, 8, 7, 6, 5, 4, 3, 2];
const secondMultiplier = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

let cpf = '705.484.450-52';
let midClearCpf = cpf.replace(/\D+/g, '');
let clearCpf = midClearCpf.substring(0, midClearCpf.length - 2);

if (Number(midClearCpf) === Number(cpfParseSix(firstMultiplier, secondMultiplier, clearCpf))) {
    console.log('OK');
} else {
    console.log('Invalid CPF');
}