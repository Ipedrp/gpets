const {contatoUsuarioFacade} = require('../dependency/injection');


module.exports.findAll = async (req, res) => {
    let contatoUsuario = await contatoUsuarioFacade.findAll();
    res.json(contatoUsuario);
}



module.exports.findById = async(req, res ) => {
    let id = req.params.id;
    let contatoUsuario = await contatoUsuarioFacade.findById(id);
    res.json(contatoUsuario);
}

module.exports.create = async(req, res) => {
    let contatoUsuario = req.body
    await contatoUsuarioFacade.create(contatoUsuario);
    res.json(contatoUsuario);
}

module.exports.update = async(req, res) => {
    let id = req.params.id;
    let contatoUsuarioBody = req.body;
    let contatoUsuario = await contatoUsuarioFacade.update(id, contatoUsuarioBody);
    res.json(contatoUsuario);
}

module.exports.delete = async(req, res) => {
    let id = req.params.id;
    await contatoUsuarioFacade.delete(id);
    res.status(200).json({status: "Contato usuario deletado!"})    
}

