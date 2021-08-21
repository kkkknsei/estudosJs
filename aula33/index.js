const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, endereco);