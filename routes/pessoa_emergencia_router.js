const express = require('express');
const pessoaEmergenciaController = require('../controllers/pessoa_emergencia_controller');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

router.get('/', isAuth, pessoaEmergenciaController.findAll);

router.get('/:id', isAuth, pessoaEmergenciaController.findById);

router.post('/', isAuth, pessoaEmergenciaController.create);

router.put('/:id', isAuth, pessoaEmergenciaController.update);

router.delete('/:id', isAuth, pessoaEmergenciaController.delete);

module.exports = router;