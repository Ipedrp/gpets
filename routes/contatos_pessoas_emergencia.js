const express = require('express');
const contatoPessoasEmergencia = require('../controllers/contato_pessoas_emergencia_controller');
const router = express.Router();
const isAuth = require("../middleware/is_auth");

router.get('/', isAuth,contatoPessoasEmergencia.findAll);

router.get('/:id', isAuth, contatoPessoasEmergencia.findById);

router.post('/', isAuth, contatoPessoasEmergencia.create);

router.put('/:id', isAuth, contatoPessoasEmergencia.update);

router.delete('/:id', isAuth, contatoPessoasEmergencia.delete);

module.exports = router;