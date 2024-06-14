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
module.exports.findByIdPet = async(req, res, )=>{
    let id = req.params.id;
    let areas_seguras = await areaSeguraFacade.findByIdPet(id);
    res.json(areas_seguras);
}
module.exports.buscaLocalizacao = async(req, res)=>{
    let id = Number(req.params.id);
    let areas_seguras = await areaSeguraFacade.buscaLocalizacao(id);
    res.json({"Status: ":areas_seguras});
}

