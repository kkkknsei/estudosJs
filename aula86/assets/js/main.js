const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");
  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const resultados = await request(objConfig);
    carregaResultados(resultados);
  } catch (err) {
    console.log(err);
  }
}

function carregaResultados(response) {
  const resultados = document.querySelector(".resultado");
  resultados.innerHTML = response;
}
