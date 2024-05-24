const express = require('express');
const contatoUsuarioController = require('../controllers/contato_usuario_controller');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

router.get("/", isAuth, contatoUsuarioController.findAll);

router.get("/:id", isAuth, contatoUsuarioController.findById);

router.post("/", isAuth, contatoUsuarioController.create);

router.put("/:id", isAuth, contatoUsuarioController.update);

router.delete("/:id", isAuth, contatoUsuarioController.delete);
   
module.exports = router;