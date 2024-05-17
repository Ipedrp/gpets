const express = require('express')


const UsuarioRepository = require('./repositories/usuarios_repositories');
const UsuarioAplication = require('./aplication/usuario_aplication');
const UsuarioFacede = require('./facede/usuario_facede');

const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioRepository(usuarioRepository);
const usuarioFacede = new UsuarioAplication(usuarioAplication);



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