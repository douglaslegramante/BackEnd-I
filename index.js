import entradaDados from 'readline-sync';

//let nome = entradaDados.question("Informe seu nome: ");
//console.log(`Olá, ${nome}!`);

//let x = entradaDados.questionInt("X: ");
//let y = entradaDados.questionFloat("Y: ");
//let total = Number(x) + Number(y);
//console.log(`Total: ${x+y}`);

let idade = 17;
if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

let msg = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";

let acesso = idade >= 18 && "Acesso liberado";
console.log(acesso);


//Execute o comando chcp 65001 no prompt de comando para resolver problemas de acentuação

//Se não funcionar, siga as instruções do link abaixo
//https://stackoverflow.com/questions/57131654/using-utf-8-encoding-chcp-65001-in-command-prompt-windows-powershell-window