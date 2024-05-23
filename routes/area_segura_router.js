const express = require('express');
const areaSeguraController = require('../controllers/area_segura_controller');
const router = express.Router();

router.get("/", areaSeguraController.findAll);

router.get("/:id", areaSeguraController.findById);

router.post("/", areaSeguraController.create);

router.put("/:id", areaSeguraController.update);

router.delete("/:id", areaSeguraController.delete);
   
module.exports = router;