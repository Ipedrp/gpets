const express = require('express');
const usuarioController = require('../controllers/usuario_controller');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

// router.use(isAuth); --> a nivel de roteador

router.get("/", isAuth, usuarioController.findAll);

router.get("/:id", isAuth, usuarioController.findById);

router.post("/", isAuth, usuarioController.create);

router.put("/:id", isAuth, usuarioController.update);

router.delete("/:id", isAuth,usuarioController.delete);
   
module.exports = router;