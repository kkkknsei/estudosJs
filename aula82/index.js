class cpfValidate {
  constructor(cpf) {
    this.cpf = cpf;
    this.valid = false;
    this.firstDigitCpf;
    this.secondDigitCpf;
  }

  startAlgo() {
    if (typeof this.cpf !== "string" || this.cpf.length < 11) {
      console.log("Invalid input.");
      return;
    }

    this.cpfHalfParsed = this.cpf.replace(/\D+/g, "");
    this.cpfParsed = this.cpfHalfParsed.substring(
      0,
      this.cpfHalfParsed.length - 2
    );

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

const cpf1 = new cpfValidate("853.412.620-85");
//const cpf1 = new cpfValidate(70548445052);
cpf1.startAlgo();
