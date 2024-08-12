import rl from 'readline-sync';

//Declaração de função
function caixaAlta(string) {
    return string.toUpperCase();
}
let nome = rl.question('Informe seu nome: ')
console.log(`EU SOU O ${caixaAlta(nome)}`)

//Expressão de função
const upperCase = function (string) { return string.toUpperCase() };
console.log(`VOCÊ NÃO É O ${upperCase(nome)}`);

//Função de seta
const mauisculas = (string) => string.toUpperCase();
console.log(`ENTENDEU, ${mauisculas(nome)}!?`);