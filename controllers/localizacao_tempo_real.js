const { localizacaoTempoRealFacade} = require('../dependency/injection');

module.exports.findAll = async (req, res) => {
    let localizacaoTempoReal = await localizacaoTempoRealFacade.findAll();
    res.json(localizacaoTempoReal);
}

module.exports.findById = async (req, res) => {
   let id = req.params.id;
   let localizacaoTempoReal = await localizacaoTempoRealFacade.findById(id);
   res.json(localizacaoTempoReal);
}

module.exports.create = async (req, res) => {
   let localizacaoTempoReal = req.body;
   await localizacaoTempoRealFacade.create(localizacaoTempoReal);
   res.json(localizacaoTempoReal);
}

module.exports.update = async (req, res) => {
   let id = req.params.id;
   let localizacaoTempoRealBody = req.body;
   let localizacaoTempoReal = await localizacaoTempoRealFacade.update(id, localizacaoTempoRealBody);
   res.json(localizacaoTempoReal);
}

module.exports.delete = async (req, res) => {
   let id = req.params.id;
   await localizacaoTempoRealFacade.delete(id);
   res.status(200).json({status: "Localização de tempo real deletada!"})
}
