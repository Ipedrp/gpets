//USUARIOS METHODS 
const UsuarioRepository = require('../repositories/usuarios_repositories');
const UsuarioAplication = require('../aplication/usuario_aplication');
const UsuarioFacade = require('../facade/usuario_facade');
const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioAplication(usuarioRepository);
const usuarioFacade = new UsuarioFacade(usuarioAplication);

//ENDERECOS METHODS 
const EnderecoRepository = require('../repositories/enderecos_repositories');
const EnderecoAplication = require('../aplication/enderecos_aplication');
const EnderecoFacade = require('../facade/endereco_facade');
const enderecoRepository = new EnderecoRepository();
const enderecoAplication = new EnderecoAplication(enderecoRepository);
const enderecoFacade = new EnderecoFacade(enderecoAplication);

//CONTATO USUARIO METHODS 
const ContatoUsuarioRepository = require('../repositories/contatos_usuarios_repositories');
const ContatoUsuarioAplication = require('../aplication/contatos_usuarios_aplication');
const ContatoUsuarioFacade = require('../facade/contatos_usuarios_facade')
const contatoUsuarioRepository = new ContatoUsuarioRepository();
const contatoUsuarioAplication =  new ContatoUsuarioAplication(contatoUsuarioRepository);
const contatoUsuarioFacade =  new ContatoUsuarioFacade(contatoUsuarioAplication);

//PETS METHODS 
const PetsRepository = require('../repositories/pets_repositories');
const PetsAplication = require('../aplication/pets_aplication');
const PetsFacade = require('../facade/pets_facade');
const petsRepository = new PetsRepository();
const petsAplication = new PetsAplication(petsRepository);
const petsFacade = new PetsFacade(petsAplication);


//AREA SEGURA METHODS 
const AreaSeguraRepository = require('../repositories/areas_seguras_repositories');
const AreaSeguraAplication = require('../aplication/areas_seguras_aplication');
const AreaSeguraFacade = require('../facade/area_segura_facade');
const areaSeguraRepository = new AreaSeguraRepository();
const areaSeguraAplication = new AreaSeguraAplication(areaSeguraRepository);
const areaSeguraFacade = new AreaSeguraFacade(areaSeguraAplication);


// ContatoPessoaEmergencia
const ContatoPessoaEmergenciaRepository = require('../repositories/contatos_pessoas_emergencias_repositories');
const ContatoPessoaEmergenciaAplication = require('../aplication/contato_pessoa_emergencia_aplication');
const ContatoPessoaEmergenciaFacade = require('../facade/contato_pessoa_emergencia_facade');
const contatoPessoaEmergenciaRepository = new ContatoPessoaEmergenciaRepository();
const contatoPessoaEmergenciaAplication = new ContatoPessoaEmergenciaRepository(contatoPessoaEmergenciaRepository);
const contatoPessoaEmergenciaFacade = new ContatoPessoaEmergenciaAplication(contatoPessoaEmergenciaAplication);

module.exports = {usuarioFacade, enderecoFacade, contatoUsuarioFacade, petsFacade, areaSeguraFacade, contatoPessoaEmergenciaFacade};