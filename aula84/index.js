function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}
/* 
function espera(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

espera("Frase 1", rand(1, 10));
espera("Frase 2", rand(1, 10));
espera("Frase 3", rand(1, 10));
espera("Frase 4", rand(1, 10));
 */

/* espera("Frase 1", rand(1, 3))
.then((response) => {
  console.log(response);
  return espera("Frase 2", rand(1, 3));
})
.then((response) => {
  console.log(response);
  return espera(2222, rand(1, 3));
})
.then((response) => {
  console.log(response);
  return espera("Frase 4", rand(1, 3));
})
.then((response) => {
  console.log(response);
  return espera("Frase 5", rand(1, 3));
})
.catch((e) => console.log("ERRO", e)); */

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Erro");
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

/* const promises = [
  //  "Primeiro valor",
  espera("Promise 1", rand(1, 5)),
  espera("Promise 2", rand(1, 5)),
  espera("Promise 3", rand(1, 5)),
  //  espera(1000, 1000),
  //  "Outro valor",
];
 */
/* Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (err) {
    console.log(err);
  }); */

/* Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (err) {
    console.log(err);
  }); */

/* Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (err) {
    console.log(err);
  });
 */

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return espera("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((err) => console.log("ERRO", err));
