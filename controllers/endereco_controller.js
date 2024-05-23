const {enderecoFacade} = require('../dependency/injection');


module.exports.finAll = async(req, res) => {
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
    res.json(usuario);
}

module.exports.update = async(req, res) => {
    let id = req.params.id
    let endereco = await enderecoFacade.findById(id);
        
    if (!endereco) {
        return res.status(404).json({ status: 'Usuário nao encontrado ' });
    }

    let enderecoBody = req.body;
    
    await enderecoFacade.update(id, enderecoBody);
    return res.status(200).json({ status: 'Usuário atualizado ' });
}

module.exports.delete = async(req, res) => {
    let id = req.params.id;
    let endereco = enderecoFacade.findById(id);
    if (!endereco) {
        return res.status(404).json({ status: 'Usuário não encontrado ' });
    }
    await enderecoFacade.delete(id);
    return res.status(200).json({ status: 'Usuário deletado ' });
}




// //ROTAS DE ENDERECO 
// //Create endereco
// app.post('/api/endereco', async (req, res) => {
//     let endereco = req.body;
//     await enderecoFacede.create(endereco);
//     res.json(endereco);
// });

// //Busca por id de endereço
// app.get('/api/endereco/findAll', async (req, res) => {
//     let enderecos = await enderecoFacede.findAll();
//     res.json(enderecos);
// })
// //busca todos os endereços
// app.get('/api/endereco/findById/:id', async (req, res) => {
//     let id = req.params.id
//     let endereco = await enderecoFacede.findById(id);
//     if (!endereco) {
//         return res.status(404).json({ status: 'Endereco nao encontrado ' });
//     }
//     return res.json(endereco);
// })

// //Busca enderecos de um usuario especifico 
// app.get('/api/endereco/findAllByIdUser/:id', async (req, res) => {
//     let id = req.params.id
//     let enderecos = await enderecoFacede.findAllByIdUser(id);
//     if (!enderecos) {
//         return res.status(404).json({ status: 'Endereco nao encontrado a este usuario ' });
//     }
//     return res.json(enderecos)
// })

// //Update endereco pelo id
// app.put('/api/endereco/update/:id', async (req, res) => {
//     let id = req.params.id
//     let endereco = await enderecoFacede.findById(id);
    
//     if (!endereco) {
//         return res.status(404).json({ status: 'Usuário nao encontrado ' });
//     }
//     let enderecoBody = req.body;

//     await enderecoFacede.update(id, enderecoBody);
//     return res.status(200).json({ status: 'Usuário atualizado ' });

// })
// //deleta um endereco pelo id
// app.delete('/api/endereco/delete/:id', async(req, res)=>{
//     let id = req.params.id;
//     let endereco = enderecoFacede.findById(id);
//     if (!endereco) {
//         return res.status(404).json({ status: 'Usuário não encontrado ' });
//     }
//     await enderecoFacede.delete(id);
//     return res.status(200).json({ status: 'Usuário deletado ' });
// })