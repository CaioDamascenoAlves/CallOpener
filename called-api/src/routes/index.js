/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-End
 * data: 06/06/2022
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) ao CallOpener ',
    version: '1.0.0'
  });
});

module.exports = router;