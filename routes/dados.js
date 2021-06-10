const express = require('express');
const router = express.Router();

const dados = require('../database/database');

router.get('/dados', (req, res, next) => {
    return res.render("index", { dados })
   
});

router.get('/database', (req, res, next) => {
    return res.json(dados)
   
});



module.exports = router;

