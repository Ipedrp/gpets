const express = require('express');
const usuarioController = require('../controllers/usuario_controller');
const router = express.Router();

router.get("/", usuarioController.findAll);

router.get("/:id", usuarioController.findById);

router.post("/", usuarioController.create);

router.put("/:id", usuarioController.update);

router.delete("/:id", usuarioController.delete);
   
module.exports = router;