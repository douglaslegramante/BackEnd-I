// Importa o módulo express, que é um framework para construir aplicações web em Node.js
const express = require('express');

// Cria uma instância da aplicação Express
const app = express();

// Define uma rota GET para a raiz do site ('/')
// Quando o caminho '/' for acessado, a função de callback será executada
app.get('/', (req, res) => {
    // Envia a resposta 'Hello, World!' ao cliente
    let mensagem = ({mensagem:'Olá, Mundo!'});
    res.json(mensagem);
});

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    // Cria um objeto Date para obter a data e hora atuais
    let data = new Date();
    // Imprime no console a mensagem de que o servidor foi iniciado, junto com a data e hora atuais
    console.log("Servidor Node iniciado em: " + data);
});
