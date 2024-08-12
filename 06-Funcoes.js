//Sintaxe básica
function name(params) {
    //
}

//Função sem parâmetro
function retorna_versao() {
    return 1.1;
}

let versao = retorna_versao();
console.log(versao);

//Funções com parâmetro
function retorna_status_aluno(nota_1, nota_2) {
    let media = (nota_1 + nota_2) / 2;
    let status;

    if (media >= 6) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    return status;
}

let status_aluno_1 = retorna_status_aluno(7, 8);
console.log("Aluno 1: " + status_aluno_1);

let status_aluno_2 = retorna_status_aluno(4, 7);
console.log("Aluno 2: " + status_aluno_2);

//Arrow Functions
const retorna_media = (nota_1, nota_2) => {
    let media = (nota_1 + nota_2) / 2;
    return media;
};

let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);
/*
const retorna_media = (nota_1, nota_2) => (nota_1 + nota_2) / 2;
let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);
*/



// As seguintes variáveis são definidas no escopo global
var num1 = 20,
    num2 = 3,
    nome = "Daniel";

// Esta função é definida no escopo global
function multiplica() {
    return num1 * num2;
}

multiplica(); // Retorna 60

// Um exemplo de função aninhada
function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return nome + " marcou " + (num1 + num2) + " pontos";
    }
    return add();
}

getScore(); // Retorna "Daniel marcou 5 pontos"