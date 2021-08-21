const hora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(() => {
    console.log(hora())
}, 1000);


setTimeout(() => {
    clearInterval(timer);
}, 3000);


setTimeout(() => {
    console.log('Olá Mundo');
}, 5000);