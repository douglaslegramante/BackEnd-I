
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  irPara: function (destino) {
    console.log(`Indo para ${destino}`);
  },
};

carro.irPara("Roma");

const car = {
  marca: "Ford",
  modelo: "Fiesta",
  ligar: function () {
    console.log(`${this.marca} ${this.modelo} ligado!`);
  },
};

car.ligar();
