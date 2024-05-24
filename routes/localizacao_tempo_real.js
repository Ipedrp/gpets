const express = require('express');
const localizacaoTempoReal = require('../controllers/localizacao_tempo_real');
const router = express.Router();

router.get("/", localizacaoTempoReal.findAll);

router.get("/:id", localizacaoTempoReal.findById);

router.post("/", localizacaoTempoReal.create);

router.put("/:id", localizacaoTempoReal.update);

router.delete("/:id", localizacaoTempoReal.delete);

module.exports = router;