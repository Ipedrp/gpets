const { petsFacade} = require('../dependency/injection');


module.exports.findAll = async(req, res) =>{
    let pet = await petsFacade.findAll();
    res.json(pet);
}

module.exports.finById = async(req, res) => {
    let id = req.params.id;
    let pet = await petsFacade.findById(id);
    res.json(pet);    
}

module.exports.create = async(req, res) =>{
    let pet = req.body
    await petsFacade.create(pet);
    res.json(pet);    
}


module.exports.update = async(req, res) => {
    let id = req.params.id;
    let petBody = req.body;
    let pet = await petsFacade.update(id, petBody);
    res.json(pet);    
}

module.exports.delete = async(req, res) => {
    let id = req.params.id;
    await petsFacade.delete(id);
    res.status(200).json({status: "Pet deletado!"})
}

// //Rotas para pets


// app.post('/api/pets', async (req, res) =>{
//     let pet = req.body
//     await petsFacade.create(pet);
//     res.json(pet);
// })

// app.get('/api/pets', async (req, res) => {
//     let pet = await petsFacade.findAll();
//     res.json(pet);
// })

// app.get('/api/pets/:id', async (req, res) => {
//     let id = req.params.id;
//     let pet = await petsFacade.findById(id);
//     res.json(pet);
// })

// app.put('/api/pets/:id', async (req, res) => {
//     let id = req.params.id;
//     let petBody = req.body;
//     let pet = await petsFacade.update(id, petBody);
//     res.json(pet);
// })

// app.delete('/api/pets/:id', async (req, res) => {
//     let id = req.params.id;
//     await petsFacade.delete(id);
//     res.status(200).json({status: "Pet deletado!"})
// })