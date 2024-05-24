const express = require('express');
const contatoPessoasEmergencia = require('../controllers/contato_pessoas_emergencia_controller');
const router = express.Router();


router.get('/', contatoPessoasEmergencia.findAll);

router.get('/:id', contatoPessoasEmergencia.findById);

router.post('/', contatoPessoasEmergencia.create);

router.put('/:id', contatoPessoasEmergencia.update);

router.delete('/:id', contatoPessoasEmergencia.delete);

module.exports = router;