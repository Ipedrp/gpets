const express = require('express')
const petsControler = require('../controllers/pets_controller');
const router = express.Router();
const isAuth = require("../middleware/is_auth");

router.get("/", isAuth, petsControler.findAll);

router.get("/:id", isAuth, petsControler.finById);

router.post("/", isAuth, petsControler.create);

router.put("/:id", isAuth, petsControler.update);

router.delete("/:id", isAuth, petsControler.delete);
   
module.exports = router;