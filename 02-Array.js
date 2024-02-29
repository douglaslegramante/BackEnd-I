//O array é uma coleção de dados que podem ser do mesmo tipo ou diferentes.
//Podemos declarar um array da seguinte forma:
let estados = ["Rio de Janeiro", "São Paulo", "Bahia"];

//Para acessar um valor do array, usamos o índice do elemento desejado entre colchetes [].
console.log(estados); //["Rio de Janeiro", "São Paulo", "Bahia"]
console.log(estados[0]); //"Rio de Janeiro"

//Alterando um valor no array
let linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
linguagens[2] = "C";

//Armazenando tipos diferentes
let titulo = "Programador";
let quantidadeDeVagas = 5;
let vagaAtiva = true;

let vaga = ["Programador", 5, true]; //Apesar disso ser possível com array, é recomendado utilizar objetos.

//Contando a quantidade de elementos
console.log(linguagens.length); // Vai imprimir 4