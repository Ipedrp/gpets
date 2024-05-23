const {enderecoFacade} = require('../dependency/injection');


module.exports.findAll = async(req, res) => {
    let enderecos = await enderecoFacade.findAll();
    res.json(enderecos);
}

module.exports.findById = async(req, res) => {
    let id = req.params.id
    let endereco = await enderecoFacade.findById(id);
    if (!endereco) {
         return res.status(404).json({ status: 'Endereco nao encontrado ' });
    }
    return res.json(endereco);
}

module.exports.findAllByIdUser = async(req, res) => {
    let id = req.params.id
    let enderecos = await enderecoFacade.findAllByIdUser(id);
    if (!enderecos) {
        return res.status(404).json({ status: 'Endereco nao encontrado a este usuario ' });
    }
    return res.json(enderecos)
}

module.exports.create = async(req, res) => {
    let endereco = req.body
    await enderecoFacade.create(endereco);
    res.json(endereco);
}

module.exports.update = async(req, res) => {
    let id = req.params.id
    let endereco = await enderecoFacade.findById(id);
        
    if (!endereco) {
        return res.status(404).json({ status: 'Endereco nao encontrado ' });
    }

    let enderecoBody = req.body;
    
    await enderecoFacade.update(id, enderecoBody);
    return res.status(200).json({ status: 'Endereco atualizado ' });
}

module.exports.delete = async(req, res) => {
    let id = req.params.id;
    let endereco = enderecoFacade.findById(id);
    if (!endereco) {
        return res.status(404).json({ status: 'Endereco não encontrado ' });
    }
    await enderecoFacade.delete(id);
    return res.status(200).json({ status: 'Endereco deletado ' });
}



