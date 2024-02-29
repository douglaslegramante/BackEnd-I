/*
class Pessoa {                             //Classe para representar uma pessoa  
  nome;                                    //Atributo para armazenar o nome da pessoa
  saudacao() {
    return `Olá, meu nome é ${this.nome}.` // Método que retorna a saudação com o nome da pessoa.
  }
}

const flavio = new Pessoa();    //Cria  um novo objeto de tipo "Pessoa".
flavio.nome = "Flavio";         //Define o valor do atributo "nome" como "Flavio".
console.log(flavio.saudacao()); //Chama o método "saudacao()" e imprime: Olá, meu nome é Flavio.

*/
/*
//Utilizando o construtor
class Pessoa {
  constructor(nome) { //Construtor da classe, recebe  o parâmetro "nome".
    this.nome = nome; //Atribui o parâmetro à propriedade "nome" do objteto criado.
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome}.`;
  }
}

const flavio = new Pessoa("Flavio");    //Cria  um novo objeto de tipo "Pessoa".
console.log(flavio.saudacao());         //Chama o método "saudacao()" e imprime: Olá, meu nome é Flavio.
*/

//Definido método statico
class Pessoa {
  static saudacaoGenerica() { // Método estático, não precisa ser instanciado.
    return "Olá";
  }
}

console.log(Pessoa.saudacaoGenerica()); //Olá
