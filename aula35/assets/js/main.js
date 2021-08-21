const elementos = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, text } = elementos[i];
    let elemento = document.createElement(tag);
    elemento.innerHTML = text;
    div.appendChild(elemento);
}

container.appendChild(div);