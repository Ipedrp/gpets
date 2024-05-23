const express = require('express')
const petsControler = require('../controllers/pets_controller');
const router = express.Router();

router.get("/", petsControler.findAll);

router.get("/:id", petsControler.finById);

router.post("/", petsControler.create);

router.put("/:id", petsControler.update);

router.delete("/:id", petsControler.delete);
   
module.exports = router;