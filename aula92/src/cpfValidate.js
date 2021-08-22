export default class cpfValidate {
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

    return this.firstDigit();
  }

  firstDigit() {
    const firstDigitMultipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    const firstDigitSum = firstDigitMultipliers.reduce((acum, val, i) => {
      return acum + val * this.cpfParsed[i];
    }, 0);

    const firstDigitToAdd =
      11 - (firstDigitSum % 11) > 9 ? 0 : 11 - (firstDigitSum % 11);

    this.firstDigitCpf = `${this.cpfParsed}${firstDigitToAdd}`;
    return this.secondDigit();
  }

  secondDigit() {
    const secondDigitMultipliers = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const secondDigitSum = secondDigitMultipliers.reduce((acum, val, i) => {
      return acum + val * this.firstDigitCpf[i];
    }, 0);

    const secondDigitToAdd =
      11 - (secondDigitSum % 11) > 9 ? 0 : 11 - (secondDigitSum % 11);

    this.secondDigitCpf = `${this.firstDigitCpf}${secondDigitToAdd}`;

    return this.validate();
  }

  validate() {
    if (this.cpfHalfParsed === this.secondDigitCpf) {
      this.valid = true;
    } else {
      this.valid = false;
    }

    return {
      valid: this.valid,
      cpf: this.cpf,
    };
  }

  static digitGenerator(shortCpf) {
    if (
      shortCpf.length < 9 ||
      shortCpf.length > 11 ||
      typeof shortCpf !== "string"
    )
      return;

    if (shortCpf.length === 9) {
      const nineMultipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2];

      const nineDigitSum = nineMultipliers.reduce((acum, val, i) => {
        return acum + val * shortCpf[i];
      }, 0);

      const nineDigitToAdd =
        11 - (nineDigitSum % 11) > 9 ? 0 : 11 - (nineDigitSum % 11);

      return `${shortCpf}${nineDigitToAdd}`;
    } else if (shortCpf.length === 10) {
      const tenMultipliers = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

      const tenDigitSum = tenMultipliers.reduce((acum, val, i) => {
        return acum + val * shortCpf[i];
      }, 0);

      const tenDigitToAdd =
        11 - (tenDigitSum % 11) > 9 ? 0 : 11 - (tenDigitSum % 11);

      return `${shortCpf}${tenDigitToAdd}`;
    }
  }
}
