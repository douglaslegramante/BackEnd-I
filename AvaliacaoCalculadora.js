import rl from 'readline-sync';

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        console.log("Erro: divisão por zero.");
        return NaN;
    }
    return num1 / num2;
}

console.log("=== Calculadora de Operações Matemáticas ===");

let opcao;
do {
    console.log("\nEscolha uma opção:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Sair");

    opcao = parseInt(rl.question("Opção: "));

    switch (opcao) {
        case 1:
            let num1_soma = parseFloat(rl.question("Digite o primeiro número: "));
            let num2_soma = parseFloat(rl.question("Digite o segundo número: "));
            console.log("Resultado: " + soma(num1_soma, num2_soma));
            break;
        case 2:
            let num1_sub = parseFloat(rl.question("Digite o primeiro número: "));
            let num2_sub = parseFloat(rl.question("Digite o segundo número: "));
            console.log("Resultado: " + subtracao(num1_sub, num2_sub));
            break;
        case 3:
            let num1_mult = parseFloat(rl.question("Digite o primeiro número: "));
            let num2_mult = parseFloat(rl.question("Digite o segundo número: "));
            console.log("Resultado: " + multiplicacao(num1_mult, num2_mult));
            break;
        case 4:
            let num1_div = parseFloat(rl.question("Digite o primeiro número: "));
            let num2_div = parseFloat(rl.question("Digite o segundo número: "));
            console.log("Resultado: " + divisao(num1_div, num2_div));
            break;
        case 5:
            console.log("Encerrando o programa. Até logo!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }

} while (opcao !== 5);
