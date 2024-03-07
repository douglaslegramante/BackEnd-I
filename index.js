import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log(`Olá, ${nome}.`);

let x = entradaDados.questionInt('X: ');
let y = entradaDados.questionFloat('Y: ');
console.log(`Total: ${x+y}`);


//Execute o comando chcp 65001 no prompt de comando para resolver problemas de acentuação

//Se não funcionar, siga as instruções do link abaixo
//https://stackoverflow.com/questions/57131654/using-utf-8-encoding-chcp-65001-in-command-prompt-windows-powershell-window