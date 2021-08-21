/* const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB, objC.chaveA); */

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.aumento(15);
p1.desconto(100);
console.log(p1);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Curso JS'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    }
});
p3.desconto(7);
console.log(p3);