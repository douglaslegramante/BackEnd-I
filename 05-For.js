//Sintaxe basica do for
//for (let index = 0; index < array.length; index++) {
  //const element = array[index];
//}

//Exemplo tabuada
let multiplicador = 8;

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for (let contador = 0; contador <= 10; contador++) {
  let resultado = multiplicador * contador;
  console.log(multiplicador + " x " + contador + " = " + resultado);
}

//Exemplo meses
let meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

for (let contador = 0; contador < meses.length; contador++) {
  console.log(meses[contador]);
}