class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado.`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado.`);
      return;
    }

    this.ligado = false;
  }
}

class Smarthopne extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.modelo = modelo;
    this.cor = cor;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);

    this.temWifi = temWifi;
  }

  ligar() {
    console.log("Teste");
  }
}

const s1 = new Smarthopne("iPhone", "Preto", "11");
s1.ligar();
s1.ligar();
console.log(s1);

const t1 = new Tablet("iPad", true);
console.log(t1);
t1.ligar();
t1.ligar();
