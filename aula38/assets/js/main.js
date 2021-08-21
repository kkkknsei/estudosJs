const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let value of ps) {
    value.style.backgroundColor = backgroundColorBody;
    value.style.color = '#FFF';
}