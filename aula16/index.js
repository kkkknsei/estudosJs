const input = Number(prompt('Insira um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = input;
texto.innerHTML = `<p>Raiz quadrada: ${input ** 0.5}</p>
<p>${input} é número inteiro: ${Number.isInteger(input)}</p>
<p>É NaN: ${isNaN(input)}</p>
<p>Arredondado para baixo: ${Math.floor(input)}</p>
<p>Arredondado para cima: ${Math.ceil(input)}</p>
<p>Com duas casas decimais: ${input.toFixed(2)}</p>`;