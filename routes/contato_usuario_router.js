const express = require('express');
const contatoUsuarioController = require('../controllers/contato_usuario_controller');
const router = express.Router();

router.get("/", contatoUsuarioController.findAll);

router.get("/:id", contatoUsuarioController.findById);

router.post("/", contatoUsuarioController.create);

router.put("/:id", contatoUsuarioController.update);

router.delete("/:id", contatoUsuarioController.delete);
   
module.exports = router;