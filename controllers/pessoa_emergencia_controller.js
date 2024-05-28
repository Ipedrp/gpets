const {pessoaEmergenciaFacade} = require('../dependency/injection');



module.exports.findAll = async (req, res) =>{
    let pessoaEmergencia = await pessoaEmergenciaFacade.findAll();
    res.json(pessoaEmergencia);
}

module.exports.findById = async (req, res) => {
    let pessoaEmergencia = await pessoaEmergenciaFacade.findAll();
    res.json(pessoaEmergencia);
}

module.exports.findById = async (req, res) => {
    let id = req.params.id;
    let pessoaEmergencia = await pessoaEmergenciaFacade.findById(id);
    res.json(pessoaEmergencia);
}

module.exports.update = async (req, res) => {
    let id = req.params.id;
    let pessoaEmergenciaBody = req.body;
    let pessoaEmergencia = await pessoaEmergenciaFacade.update(id, pessoaEmergenciaBody);
    res.json(pessoaEmergencia);
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    await pessoaEmergenciaFacade.delete(id);
    res.status(200).json({status: "Pessoa emergencia deletado!"});
}