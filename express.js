const express = require('express')


const UsuarioRepository = require('./repositories/usuarios_repositories');
const UsuarioAplication = require('./aplication/usuario_aplication');
const UsuarioFacede = require('./facede/usuario_facede');

const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioRepository(usuarioRepository);
const usuarioFacede = new UsuarioAplication(usuarioAplication);

//Criando métodos de ContatoPessoaEmergencia
const ContatoPessoaEmergenciaRepository = require('./repositories/contatos_pessoas_emergencias_repositories');
const ContatoPessoaEmergenciaAplication = require('./aplication/contato_pessoa_emergencia_aplication');
const ContatoPessoaEmergenciaFacede = require('./facede/contato_pessoa_emergencia_facede');

const contatoPessoaEmergenciaRepository = new ContatoPessoaEmergenciaRepository();
const contatoPessoaEmergenciaAplication = new ContatoPessoaEmergenciaRepository(contatoPessoaEmergenciaRepository);
const contatoPessoaEmergenciaFacede = new ContatoPessoaEmergenciaAplication(contatoPessoaEmergenciaAplication);


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
    console.log(usuarioBody);
    let usuario = await usuarioFacede.update(id, usuarioBody);
    res.json(usuario);
})

app.delete('/api/usuario/:id', async (req, res) => {
    let id = req.params.id;
    await usuarioFacede.delete(id);
    res.status(200).json({status: "Usuario deletado!"})
})


//Criando rotas para ContatoPessoaEmergencia

app.post('/api/contatoPessoaEmergencia', async (req, res) =>{
    let contatoPessoaEmergencia = req.body
    await contatoPessoaEmergenciaFacede.create(contatoPessoaEmergencia);
    res.json(contatoPessoaEmergencia);
})

app.get('/api/contatoPessoaEmergencia', async (req, res) => {
    let contatoPessoaEmergencia = await contatoPessoaEmergenciaFacede.findAll();
    res.json(contatoPessoaEmergencia);
})

app.get('/api/contatoPessoaEmergencia/:id', async (req, res) => {
    let id = req.params.id;
    let contatoPessoaEmergencia = await contatoPessoaEmergenciaFacede.findById(id);
    res.json(contatoPessoaEmergencia);
})


app.put('/api/contatoPessoaEmergencia/:id', async (req, res) => {
    let id = req.params.id;
    let contatoPessoaEmergenciaBody = req.body;
    console.log(contatoPessoaEmergenciaBody);
    let contatoPessoaEmergencia = await contatoPessoaEmergenciaFacede.update(id, contatoPessoaEmergenciaBody);
    res.json(contatoPessoaEmergencia);
})

app.delete('/api/contatoPessoaEmergencia/:id', async (req, res) => {
    let id = req.params.id;
    await contatoPessoaEmergenciaFacede.delete(id);
    res.status(200).json({status: "Contato deletado!"})
})

// app.put('/api/usuario/:id', async (req, res) => {
//     const id = req.params.id;
//     const usuarioBody = req.body;

//     try {
//         console.log('Corpo da requisição:', usuarioBody);
//         let usuario = await usuarioFacede.findById(id);
//         if (usuario) {
//             usuario = await usuarioFacede.update(id, usuarioBody);
//             return res.status(200).json({ status: 'Usuário atualizado ' });
//         } else{
//             return res.status(404).json({ status: 'Usuário nao encontrado ' });
            
//         }
//         // res.json(usuario);
//     } catch (error) {
//         res.status(500).json({ error: 'Erro ao atualizar usuário' });
//     }
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})