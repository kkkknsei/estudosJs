import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const quantidade = document.querySelector(".count");
const numeros = document.querySelector(".numbers");
const maiusculas = document.querySelector(".upper");
const minusculas = document.querySelector(".lower");
const simbolos = document.querySelector(".symbols");
const submit = document.querySelector(".submit");

export default () => {
  submit.addEventListener("click", function () {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    quantidade.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );

  return senha || "Nada selecionado";
}
