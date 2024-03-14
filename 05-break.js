//Sintaxe com break
while (true) {
    if (algoForVerdadeiro) break
}

//Exemplo de utilização do break
let funcionarios = [
    { id: 1, nome: "César", habilitado: false }, //0
    { id: 2, nome: "Jéssica", habilitado: false },//1
    { id: 3, nome: "Renan", habilitado: true }, //2
    { id: 4, nome: "Marlon", habilitado: false }, //3
    { id: 5, nome: "Ana", habilitado: false } //4
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
    let funcionario = funcionarios[contador];
    if (funcionario.habilitado == true) {
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }
    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}