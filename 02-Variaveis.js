//Criando uma variável com var
var programador = "Eduardo";
var pontuacao = 10;

console.log(programador);
// Imprime Eduardo
console.log(pontuacao);
// Imprime 10

//Criando uma variável com let, que é mais utilizada para declarar variáveis no escopo do bloco (entre chaves)
let tecnologia = "JavaScript";
let anoAtual = 2021;

//Ao utilizar var conseguimos redeclarar uma mesma variável. Já o let e const não permitem isso.
var nome = "José";
var nome = "Pedro";

//Declarando uma constante. Uma constante deve ser declarada e inicializada.
const url = "https://www.devmedia.com.br/"; // Constante, não pode ser alterada após a declaração.

const aula = "JavaScript";
aula = "JS";  // Erro! Ao tentarmos alterar uma constante, recebemos um erro no console.