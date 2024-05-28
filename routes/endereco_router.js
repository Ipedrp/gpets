const express = require('express');
const enderecoController = require('../controllers/endereco_controller');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

router.get("/", isAuth, enderecoController.findAll);

router.get("/:id", isAuth, enderecoController.findById);

router.get("/:id", isAuth, enderecoController.findAllByIdUser);

router.post("/", isAuth, enderecoController.create);

router.put("/:id", isAuth, enderecoController.update);

router.delete("/:id", isAuth, enderecoController.delete);
   
module.exports = router;