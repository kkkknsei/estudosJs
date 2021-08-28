import validator from "validator";

export default class Form {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    if (validator.isEmpty(nomeInput.value)) {
      alert("Preencha um nome");
      error = true;
    }

    if (!validator.isEmail(emailInput.value)) {
      alert("Preencha um e-mail válido");
      error = true;
    }

    if (
      validator.isEmpty(emailInput.value) &&
      validator.isEmpty(telefoneInput.value)
    ) {
      alert("Você precisa preencher um e-mail ou um telefone");
      error = true;
    }

    if (!error) el.submit();
  }
}
