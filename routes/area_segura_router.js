const express = require('express');
const areaSeguraController = require('../controllers/area_segura_controller');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

router.get("/", areaSeguraController.findAll);

router.get("/:id", areaSeguraController.findById);

router.post("/", isAuth, areaSeguraController.create);

router.put("/:id",  areaSeguraController.update);

router.delete("/:id", areaSeguraController.delete);

router.get("/localizacao/:id", isAuth,areaSeguraController.buscaLocalizacao);
   
module.exports = router;