const texto = document.querySelector('#texto');
const data = new Date();

const changeDate = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });
const changeTime = data.toLocaleTimeString('pt-BR', { timeStyle: 'short' })

texto.innerHTML = `${changeDate} ${changeTime}`;

/*
function addZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function parseDate (data) {
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());

    const listaDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const listaMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 
                        'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${listaDias[diaSemana]}, ${dia} de ${listaMes[mes]} de ${ano} ${hora}:${min}`;
}

const change = parseDate(data);

texto.innerHTML = change;

*/
