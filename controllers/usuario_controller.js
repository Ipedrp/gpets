const { usuarioFacade} = require('../dependency/injection');


module.exports.findAll = async (req, res) =>{
    let usuarios = await usuarioFacade.findAll();
    res.status(200).json(usuarios);
}

module.exports.findById = async (req, res) =>{
    let id = req.params.id;
    let usuario = await usuarioFacade.findById(id);
    res.json(usuario);
}

module.exports.create = async (req, res) => {
    let usuario = req.body
    await usuarioFacade.create(usuario);
    res.json(usuario);
}

module.exports.update = async (req, res) => {
    let id = req.params.id;
    let usuarioBody = req.body;
    let usuario = await usuarioFacade.update(id, usuarioBody);
    res.json(usuario);
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    await usuarioFacade.delete(id);
    res.status(200).json({ status: "Usuario deletado!" })
}

