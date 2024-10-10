// Importa o módulo 'express', que é um framework para Node.js que facilita a criação de servidores web.
const express = require('express');

// Cria uma instância do aplicativo Express. 'app' é o nosso servidor que manipulará as requisições.
const app = express();

// Define uma rota GET para '/time'. Quando o servidor receber uma requisição GET para esse caminho, a função callback será executada.
app.get('/time', (req, res) => {
  
  // Cria um objeto Date, que captura a data e hora atuais.
  const now = new Date();
  
  // Extrai as horas, minutos e segundos do objeto 'now' e garante que cada valor tenha dois dígitos.
  // O método 'padStart(2, '0')' adiciona um zero à esquerda se o valor tiver menos de dois dígitos.
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Concatena as horas, minutos e segundos em uma string no formato HH:MM:SS.
  const currentTime = `${hours}:${minutes}:${seconds}`;
  
  // Envia a resposta como um objeto JSON, contendo o horário formatado.
  res.json({ time: currentTime });
});

// Define a porta na qual o servidor irá escutar. Aqui estamos usando a porta 4000.
const PORT = 4000;

// Inicia o servidor e o faz escutar na porta especificada. O callback é executado quando o servidor começa a rodar.
app.listen(PORT, () => {
  // Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta ele está escutando.
  console.log(`Servidor rodando na porta ${PORT}`);
  
});

