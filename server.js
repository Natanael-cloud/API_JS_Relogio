const express = require('express');
const app = express();

// Rota que retorna o horário atual no formato HH:MM:SS
app.get('/time', (req, res) => {
  // Obtém o horário atual
  const now = new Date();
  
  // Formata o horário no estilo HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  
  // Retorna a resposta como JSON
  res.json({ time: currentTime });
});

// Servidor rodando na porta 3000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  
});
