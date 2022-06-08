/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execucação do Back-End ('Called')
 * data: 07/06/2022
 
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});

