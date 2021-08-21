class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume - +2;
  }

  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto("LG");
const controle2 = new ControleRemoto("Samsung");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.aumentarVolume();
console.log(ControleRemoto.soma(1, 2));
console.log(controle1);
console.log(controle2);
