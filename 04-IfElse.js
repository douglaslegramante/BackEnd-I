let idade = 17;
if (idade >= 16) console.log("Pode votar");
//vai imprimir  "pode votar"
(idade >= 16) && console.log("Pode votar");

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é sábado ou domingo
if (dia_semana == 0 || dia_semana == 6) {
    //Imprime uma mensagem informando o horário de funcionamento
    console.log("Funcionamos apenas de Segunda à Sexta");
} else {
    //Do contrário, informa que a loja está aberta
    console.log("Loja aberta");
}

//Situação aluno
let media = 6;
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Limite de compra
let limite = 100;
if (limite >= 50) {
    console.log("Compra aprovada");
} else {
    console.log("Compra negada");
}

//Resposta diferente de 3
let resposta = 2;
if (resposta != 3) {
    console.log("Resposta incorreta");
} else {
    console.log("Resposta correta");
}

//Faixa etária
if (idade > 17 && idade < 25) {
    console.log("Entre 18-24 anos");
} else {
    console.log("Fora da faixa etária");
}

//Resposta igual a 5
if (resposta == 5) {
    console.log("Resposta correta");
} else {
    console.log("Resposta incorreta");
}

//Identificando o mês
let mes = 3;
if (mes == 11 || mes == 12) {
    console.log("Promoção!");
} else {
    F
    console.log("Preço normal");
}