const express = require('express');
const localizacaoTempoReal = require('../controllers/localizacao_tempo_real');
const router = express.Router();
const isAuth = require('../middleware/is_auth');

router.get("/", isAuth, localizacaoTempoReal.findAll);

router.get("/:id", isAuth, localizacaoTempoReal.findById);

router.post("/", isAuth,localizacaoTempoReal.create);

router.put("/:id", isAuth, localizacaoTempoReal.update);

router.delete("/:id", isAuth, localizacaoTempoReal.delete);

module.exports = router;