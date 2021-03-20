const express = require('express');
const router = express.Router();

router.get('/dadosCovid', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Buscando dados'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Buscando dados com post'
    });
});

router.get('/:id_dadosCovid', (req, res, next) => {
    const id = req.params.id_dadosCovid
    res.status(200).send({
        mensagem: 'Buscando dados por ID',
        id: id
    });
});

module.exports = router;

