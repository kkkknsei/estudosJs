class cpfValidate {
  constructor(cpf) {
    if (typeof this.cpf === "number") return;
    this.cpf = cpf;
    this.cpfHalfParsed = this.cpf.replace(/\D+/g, "");
    this.cpfParsed = this.cpfHalfParsed.substring(
      0,
      this.cpfHalfParsed.length - 2
    );
    this.valid = false;
    this.firstDigitCpf;
    this.secondDigitCpf;
  }

  startAlgo() {
    if (typeof this.cpf === "number") return;

    this.firstDigit();
  }

  firstDigit() {
    const firstDigitMultipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    const firstDigitSum = firstDigitMultipliers.reduce((acum, val, i) => {
      return acum + val * this.cpfParsed[i];
    }, 0);

    const firstDigitToAdd =
      11 - (firstDigitSum % 11) > 9 ? 0 : 11 - (firstDigitSum % 11);

    this.firstDigitCpf = `${this.cpfParsed}${firstDigitToAdd}`;
    this.secondDigit();
  }

  secondDigit() {
    const secondDigitMultipliers = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const secondDigitSum = secondDigitMultipliers.reduce((acum, val, i) => {
      return acum + val * this.firstDigitCpf[i];
    }, 0);

    const secondDigitToAdd =
      11 - (secondDigitSum % 11) > 9 ? 0 : 11 - (secondDigitSum % 11);

    this.secondDigitCpf = `${this.firstDigitCpf}${secondDigitToAdd}`;

    this.validate();
  }

  validate() {
    if (this.cpfHalfParsed === this.secondDigitCpf) {
      this.valid = true;
      console.log("CPF válido.");
    } else {
      this.valid = false;
      console.log("CPF inválido.");
    }
  }
}

//let cpf = "705.484.450-52";

//const cpf1 = new cpfValidate("705.484.450-52");
cpf1.startAlgo();
