const express = require('express');
const app = express();

const rotaDadosCovid = require('./routes/dadosCovid');

app.use('/dadosCovid', rotaDadosCovid);


module.exports = app;