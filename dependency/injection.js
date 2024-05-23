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

module.exports = {usuarioFacade, enderecoFacade};