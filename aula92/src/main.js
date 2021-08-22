import cpfGenerator from "./cpfGenerator";
import "./assets/css/style.css";

(function () {
  const newCpf = new cpfGenerator().geraNovoCpf();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = newCpf;
})();
