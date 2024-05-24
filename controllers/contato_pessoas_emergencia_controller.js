const {contatoPessoaEmergenciaFacade} = require('../dependency/injection');

module.exports.findAll = async(req, res)=>{
  let contatos = await contatoPessoaEmergenciaFacade.findAll();
  res.json(contatos);
}
module.exports.findById = async(req, res)=>{
  let id = req.params.id;
  let contato = await contatoPessoaEmergenciaFacade.findById(id);
  res.json(contato);
}

module.exports.create = async(req, res)=>{
  let contato = req.body;
  await contatoPessoaEmergenciaFacade.create(contato);
  res.json(contato);
}

module.exports.update = async(req, res)=>{
  let id = req.params.id;
  let contatoBody = req.body;
  let contato = await contatoPessoaEmergenciaFacade.update(id, contatoBody);
  res.json(contato);

}

module.exports.delete = async(req, res) => {
  let id = req.params.id;
  await contatoPessoaEmergenciaFacade.delete(id);
  res.status(200).json({status: "Contato de Pessoa emergencia deletado!"});

}


}
module.exports.delete = async(req, res) => {
  let id = req.params.id;
  await contatoPessoaEmergenciaFacade.delete(id);
  res.status(200).json({status: "Contato deletado!"})
}