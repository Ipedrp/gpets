const express = require('express');
const pessoaEmergenciaController = require('../controllers/pessoa_emergencia_controller');
const router = express.Router();

router.get('/', pessoaEmergenciaController.findAll);

router.get('/:id', pessoaEmergenciaController.findById);

router.post('/', pessoaEmergenciaController.create);

router.put('/:id', pessoaEmergenciaController.update);

router.delete('/:id', pessoaEmergenciaController.delete);

module.exports = router;