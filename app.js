const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'njk');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

nunjucks.configure("views", {
    express: app
})

const rotaDadosCovid = require('./routes/dadosCovid');

 
app.use('/', rotaDadosCovid);



module.exports = app;