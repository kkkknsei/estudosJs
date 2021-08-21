/* fetch("pessoas.json")
  .then((response) => response.json())
  .then((json) => loadPageElements(json)); */

axios("pessoas.json").then((response) => loadPageElements(response.data));

function loadPageElements(json) {
  const table = document.createElement("table");

  for (let pessoas of json) {
    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = pessoas.nome;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = pessoas.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const result = document.querySelector(".pessoas");

  result.appendChild(table);
}
