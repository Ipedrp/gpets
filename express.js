const express = require('express')

//Acessando requisições e crindo um novo objeto da tabela usuario!

const UsuarioRepository = require('./repositories/usuarios_repositories');
const UsuarioAplication = require('./aplication/usuario_aplication');
const UsuarioFacede = require('./facede/usuario_facede');

const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioRepository(usuarioRepository);
const usuarioFacede = new UsuarioAplication(usuarioAplication);

//Acessando requisições e crindo um novo objeto da tabela contatos_usuarios!

const ContatoUsuarioRepository = require('./repositories/contatos_usuarios_repositories');
const ContatoUsuarioAplication = require('./aplication/contatos_usuarios_aplication');
const ContatoUsuarioFacede = require('./facede/contatos_usuarios_facede')

const contatoUsuarioRepository = new ContatoUsuarioRepository();
const contatoUsuarioAplication =  new ContatoUsuarioRepository(contatoUsuarioRepository);
const contatoUsuarioFacede =  new ContatoUsuarioAplication(contatoUsuarioAplication);

//Acessando requisições e crindo um novo objeto da tabela pets!

const PetsRepository = require('./repositories/pets_repositories');
const PetsAplication = require('./aplication/pets_aplication');
const PetsFacede = require('./facede/pets_facede');

const petsRepository = new PetsRepository();
const petsAplication = new PetsRepository(petsRepository);
const petsFacede = new PetsAplication(petsAplication);



//Acessando requisições e crindo um novo objeto da tabela pessoas_emergencia!

const PessoaEmergenciaRepository = require('./repositories/pessoas_emergencias_repositories');
const PessoaEmergenciaAplication = require('./aplication/pessoas_emergencias_aplication');
const PessoaEmergenciaFacede = require('./facede/pessoa_emergencias_facede');

const pessoaEmergenciaRepository = new PessoaEmergenciaRepository();
const pessoaEmergenciaAplication = new PessoaEmergenciaRepository(pessoaEmergenciaRepository);
const pessoaEmergenciaFacede = new PessoaEmergenciaAplication(pessoaEmergenciaAplication);

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/usuario', async (req, res) =>{
    let usuario = req.body
    await usuarioFacede.create(usuario);
    res.json(usuario);
})

app.get('/api/usuario', async (req, res) => {
    let usuario = await usuarioFacede.findAll();
    res.json(usuario);
})

app.get('/api/usuario/:id', async (req, res) => {
    let id = req.params.id;
    let usuario = await usuarioFacede.findById(id);
    res.json(usuario);
})


app.put('/api/usuario/:id', async (req, res) => {
    let id = req.params.id;
    let usuarioBody = req.body;
    let usuario = await usuarioFacede.update(id, usuarioBody);
    res.json(usuario);
})

app.delete('/api/usuario/:id', async (req, res) => {
    let id = req.params.id;
    await usuarioFacede.delete(id);
    res.status(200).json({status: "Usuario deletado!"})
})


//Rotas para contatos_usuarios


app.post('/api/contatoUsuario', async (req, res) =>{
    let contatoUsuario = req.body
    await contatoUsuarioFacede.create(contatoUsuario);
    res.json(contatoUsuario);
})

app.get('/api/contatoUsuario', async (req, res) => {
    let contatoUsuario = await contatoUsuarioFacede.findAll();
    res.json(contatoUsuario);
})

app.get('/api/contatoUsuario/:id', async (req, res) => {
    let id = req.params.id;
    let contatoUsuario = await contatoUsuarioFacede.findById(id);
    res.json(contatoUsuario);
})
app.put('/api/contatoUsuario/:id', async (req, res) => {
    let id = req.params.id;
    let contatoUsuarioBody = req.body;
    let contatoUsuario = await contatoUsuarioFacede.update(id, contatoUsuarioBody);
    res.json(contatoUsuario);
})

app.delete('/api/contatoUsuario/:id', async (req, res) => {
    let id = req.params.id;
    await contatoUsuarioFacede.delete(id);
    res.status(200).json({status: "Contato usuario deletado!"})
})

//Rotas para pets


app.post('/api/pets', async (req, res) =>{
    let pet = req.body
    await petsFacede.create(pet);
    res.json(pet);
})

app.get('/api/pets', async (req, res) => {
    let pet = await petsFacede.findAll();
    res.json(pet);
})

app.get('/api/pets/:id', async (req, res) => {
    let id = req.params.id;
    let pet = await petsFacede.findById(id);
    res.json(pet);
})

app.put('/api/pets/:id', async (req, res) => {
    let id = req.params.id;
    let petBody = req.body;
    let pet = await petsFacede.update(id, petBody);
    res.json(pet);
})

app.delete('/api/pets/:id', async (req, res) => {
    let id = req.params.id;
    await petsFacede.delete(id);
    res.status(200).json({status: "Pet deletado!"})
})


//Rotas para pessoas_emergencia


app.post('/api/pessoaEmergencia', async (req, res) =>{
    let pessoaEmergencia = req.body
    await pessoaEmergenciaFacede.create(pessoaEmergencia);
    res.json(pessoaEmergencia);
})

app.get('/api/pessoaEmergencia', async (req, res) => {
    let pessoaEmergencia = await pessoaEmergenciaFacede.findAll();
    res.json(pessoaEmergencia);
})

app.get('/api/pessoaEmergencia/:id', async (req, res) => {
    let id = req.params.id;
    let pessoaEmergencia = await pessoaEmergenciaFacede.findById(id);
    res.json(pessoaEmergencia);
})

app.put('/api/pessoaEmergencia/:id', async (req, res) => {
    let id = req.params.id;
    let pessoaEmergenciaBody = req.body;
    let pessoaEmergencia = await pessoaEmergenciaFacede.update(id, pessoaEmergenciaBody);
    res.json(pessoaEmergencia);
})

app.delete('/api/pessoaEmergencia/:id', async (req, res) => {
    let id = req.params.id;
    await pessoaEmergenciaFacede.delete(id);
    res.status(200).json({status: "Pessoa emergencia deletado!"})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})