//Tipos de dados 
//Number.
//Boolean
//String.

//O tipo de uma variável é definido de acordo com o valor dela. 
//Para descobrir o tipo de uma variável sem ser pelo seu valor, basta utilizar 'typeof'.
var valor = 4;
console.log(typeof valor); //Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome); //Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado); //Vai imprimir 'boolean'

//Undefined pode ser evitado atribuindo um valor para a variável ou verificando se ela existe antes de usar.
var nome;
console.log(nome); //vai imprimir undefined
console.log(nome.length);  //vai gerar um erro

var idade;
console.log( idade + 1 ); //vai imprimir NaN (Not a Number), não é um número

//Null é diferente de Undefined. Ele representa ausência de valor ou falta de informação.
var cor  = null;
console.log(cor); //vai imprimir null
console.log(cor.length); //vai gerar um erro 

var preco = null;
console.log(preco.toFixed(2));  //vai gerar um erro