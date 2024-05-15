const express = require('express')


const UsuarioRepository = require('./repositories/usuarios_repositories');
const UsuarioAplication = require('./aplication/usuario_aplication');
const UsuarioFacede = require('./facede/usuario_facede');

const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioRepository(usuarioRepository);
const usuarioFacede = new UsuarioAplication(usuarioAplication);




const app = express();
const port = 3000;

app.get('/api/usuario', async (req, res) => {
    let usuario = await usuarioFacede.findAll();
    res.json(usuario);
})

app.get('/api/usuario/:id', async (req, res) => {
    let id = req.params.id;
    let usuario = await usuarioFacede.findById(id);
    res.json(usuario);
})

// app.put('/api/usuario/:id', async (req, res) => {
//     let id = req.params.id;
//     let asd = req.body;
//     console.log(asd);
//     // await usuarioFacede.update(id, usuarioBody);
//     res.json({teste: ""});
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})