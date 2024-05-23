const express = require('express');
const enderecoController = require('../controllers/endereco_controller');
const router = express.Router();

router.get("/", enderecoController.findAll);

router.get("/:id", enderecoController.findById);

router.get("/:id", enderecoController.findAllByIdUser);

router.post("/", enderecoController.create);

router.put("/:id", enderecoController.update);

router.delete("/:id", enderecoController.delete);
   
module.exports = router;