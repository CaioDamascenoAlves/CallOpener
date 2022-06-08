/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a conexão com o arquivo 'server.js'
 * data: 06/06/222
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (Called):
const index = require('./routes/index');
const calledRoute = require('./routes/called.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', calledRoute);

module.exports = app;