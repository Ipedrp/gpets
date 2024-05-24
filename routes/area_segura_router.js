const express = require('express');
const areaSeguraController = require('../controllers/area_segura_controller');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

router.get("/", isAuth, areaSeguraController.findAll);

router.get("/:id", isAuth, areaSeguraController.findById);

router.post("/", isAuth, areaSeguraController.create);

router.put("/:id", isAuth, areaSeguraController.update);

router.delete("/:id", isAuth, areaSeguraController.delete);
   
module.exports = router;