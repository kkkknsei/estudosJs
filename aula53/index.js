function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Pedro');
console.log(funcao());