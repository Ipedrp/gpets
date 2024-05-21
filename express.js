const express = require('express')


const UsuarioRepository = require('./repositories/usuarios_repositories');
const UsuarioAplication = require('./aplication/usuario_aplication');
const UsuarioFacede = require('./facede/usuario_facede');

const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioRepository(usuarioRepository);
const usuarioFacede = new UsuarioAplication(usuarioAplication);

//criando metodos da tabela areaSegura
const AreaSeguraRepository = require('./repositories/areas_seguras_repositories');
const AreaSeguraAplication = require('./aplication/areas_seguras_aplication');
const AreaSeguraFacede = require('./facede/area_segura_facede');

const areaSeguraRepository = new AreaSeguraRepository();
const areaSeguraAplication = new AreaSeguraRepository(areaSeguraRepository);
const areaSeguraFacede = new AreaSeguraAplication(areaSeguraAplication);

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

//criando rota post areaSegura
app.post('/api/areaSegura', async (req, res) =>{
    let areas_seguras = req.body
    await areaSeguraFacede.create(areas_seguras);
    res.json(areas_seguras);
})

//criando rota get areaSegura
app.get('/api/areaSegura', async (req, res) => {
    let areas_seguras = await areaSeguraFacede.findAll();
    res.json(areas_seguras);
})

//criando rota get areaSegura
app.get('/api/areaSegura/:id', async (req, res) => {
    let id = req.params.id;
    let areas_seguras = await areaSeguraFacede.findById(id);
    res.json(areas_seguras);
})

//criando rota put areaSegura
app.put('/api/areaSegura/:id', async (req, res) => {
    let id = req.params.id;
    let area_seguraBody = req.body;
    console.log(area_seguraBody);
    let areas_seguras = await areaSeguraFacede.update(id, area_seguraBody);
    res.json(areas_seguras);
})

//criando rota delete areaSegura
app.delete('/api/areaSegura/:id', async (req, res) => {
    let id = req.params.id;
    await areaSeguraFacede.delete(id);
    res.status(200).json({status: "Area segura deletada!"})
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