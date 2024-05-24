const {areaSeguraFacade} = require('../dependency/injection');


module.exports.findAll = async(req, res) =>{
    let areas_seguras = await areaSeguraFacade.findAll();
    res.json(areas_seguras);    
}

module.exports.findById = async(req, res) => {
    let id = req.params.id;
    let areas_seguras = await areaSeguraFacade.findById(id);
    res.json(areas_seguras);    
}

module.exports.create = async(req, res) => {
    let areas_seguras = req.body
    await areaSeguraFacade.create(areas_seguras);
    res.json(areas_seguras);    
}

module.exports.update = async(req, res) => {
    let id = req.params.id;
    let area_seguraBody = req.body;
    console.log(area_seguraBody);
    let areas_seguras = await areaSeguraFacade.update(id, area_seguraBody);
    res.json(areas_seguras);    
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    await areaSeguraFacade.delete(id);
    res.status(200).json({status: "Area segura deletada!"})    
}




// //criando rota post areaSegura
// app.post('/api/areaSegura', async (req, res) =>{
//     let areas_seguras = req.body
//     await areaSeguraFacade.create(areas_seguras);
//     res.json(areas_seguras);
// })

// //criando rota get areaSegura
// app.get('/api/areaSegura', async (req, res) => {
//     let areas_seguras = await areaSeguraFacade.findAll();
//     res.json(areas_seguras);
// })

// //criando rota get areaSegura
// app.get('/api/areaSegura/:id', async (req, res) => {
//     let id = req.params.id;
//     let areas_seguras = await areaSeguraFacade.findById(id);
//     res.json(areas_seguras);
// })

// //criando rota put areaSegura
// app.put('/api/areaSegura/:id', async (req, res) => {
//     let id = req.params.id;
//     let area_seguraBody = req.body;
//     console.log(area_seguraBody);
//     let areas_seguras = await areaSeguraFacade.update(id, area_seguraBody);
//     res.json(areas_seguras);
// })

// //criando rota delete areaSegura
// app.delete('/api/areaSegura/:id', async (req, res) => {
//     let id = req.params.id;
//     await areaSeguraFacade.delete(id);
//     res.status(200).json({status: "Area segura deletada!"})
// })