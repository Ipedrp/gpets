const {pessoaEmergenciaFacade} = require('../dependency/injection');


// app.post('/api/pessoaEmergencia', async (req, res) =>{
//     let pessoaEmergencia = req.body
//     await pessoaEmergenciaFacade.create(pessoaEmergencia);
//     res.json(pessoaEmergencia);
// })

// app.get('/api/pessoaEmergencia', async (req, res) => {
//     let pessoaEmergencia = await pessoaEmergenciaFacade.findAll();
//     res.json(pessoaEmergencia);
// })

// app.get('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let pessoaEmergencia = await pessoaEmergenciaFacade.findById(id);
//     res.json(pessoaEmergencia);
// })

// app.put('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let pessoaEmergenciaBody = req.body;
//     let pessoaEmergencia = await pessoaEmergenciaFacade.update(id, pessoaEmergenciaBody);
//     res.json(pessoaEmergencia);
// })

// app.delete('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     await pessoaEmergenciaFacade.delete(id);
//     res.status(200).json({status: "Pessoa emergencia deletado!"})
// })


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