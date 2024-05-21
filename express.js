const express = require('express')
const moment = require('moment-timezone');

//USUARIOS METHODS 
const UsuarioRepository = require('./repositories/usuarios_repositories');
const UsuarioAplication = require('./aplication/usuario_aplication');
const UsuarioFacede = require('./facede/usuario_facede');
const usuarioRepository = new UsuarioRepository();
const usuarioAplication = new UsuarioRepository(usuarioRepository);
const usuarioFacede = new UsuarioAplication(usuarioAplication);

//ENDERECOS METHODS 
const EnderecoRepository = require('./repositories/enderecos_repositories');
const EnderecoAplication = require('./aplication/enderecos_aplication');
const EnderecoFacede = require('./facede/endereco_facede');
const enderecoRepository = new EnderecoRepository();
const enderecoAplication = new EnderecoRepository(enderecoRepository);
const enderecoFacede = new EnderecoAplication(enderecoAplication);

//LOCALIZACAO TEMPO REAL
const LocalizacaoTempoRealRepository = require('./repositories/localizacoes_tempo_real_repositories');
const LocalizacaoTempoRealAplication = require('./aplication/localizacao_tempo_real_aplication');
const LocalizacaoTempoRealFacede = require('./facede/localizacao_tempo_real_facede');
const localizacaoTempoRealRepository = new LocalizacaoTempoRealRepository();
const localizacaoTempoRealAplication = new LocalizacaoTempoRealRepository(localizacaoTempoRealRepository);
const localizacaoTempoRealFacede = new LocalizacaoTempoRealAplication(localizacaoTempoRealAplication);


const app = express();
const port = 3000;

app.use(express.json());


// ROTAS DE USUARIOS
app.post('/api/usuario', async (req, res) => {
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
    res.status(200).json({ status: "Usuario deletado!" })
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

//ROTAS DE ENDERECO 
//Create endereco
app.post('/api/endereco', async (req, res) => {
    let endereco = req.body;
    await enderecoFacede.create(endereco);
    res.json(endereco);
});

//Busca por id de endereço
app.get('/api/endereco/findAll', async (req, res) => {
    let enderecos = await enderecoFacede.findAll();
    res.json(enderecos);
})
//busca todos os endereços
app.get('/api/endereco/findById/:id', async (req, res) => {
    let id = req.params.id
    let endereco = await enderecoFacede.findById(id);
    if (!endereco) {
        return res.status(404).json({ status: 'Endereco nao encontrado ' });
    }
    return res.json(endereco);
})

//Busca enderecos de um usuario especifico 
app.get('/api/endereco/findAllByIdUser/:id', async (req, res) => {
    let id = req.params.id
    let enderecos = await enderecoFacede.findAllByIdUser(id);
    if (!enderecos) {
        return res.status(404).json({ status: 'Endereco nao encontrado a este usuario ' });
    }
    return res.json(enderecos)
})

//Update endereco pelo id
app.put('/api/endereco/update/:id', async (req, res) => {
    let id = req.params.id
    let endereco = await enderecoFacede.findById(id);
    
    if (!endereco) {
        return res.status(404).json({ status: 'Usuário nao encontrado ' });
    }
    let enderecoBody = req.body;

    await enderecoFacede.update(id, enderecoBody);
    return res.status(200).json({ status: 'Usuário atualizado ' });

})
//deleta um endereco pelo id
app.delete('/api/endereco/delete/:id', async(req, res)=>{
    let id = req.params.id;
    let endereco = enderecoFacede.findById(id);
    if (!endereco) {
        return res.status(404).json({ status: 'Usuário não encontrado ' });
    }
    await enderecoFacede.delete(id);
    return res.status(200).json({ status: 'Usuário deletado ' });
})
//Rotas Para Localização em tempo real
app.post('/api/gps', async (req, res) => {
    let localizacao = req.body;

    const dataHoraBrasil = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
    localizacao['data'] = dataHoraBrasil;

    try {
        await localizacaoTempoRealFacede.create(localizacao);
        res.json(localizacao);

    } catch (error) {
        res.status(500).json({ error: 'Failed to save location' });
    }
});
app.put('/api/gps/:id', async (req, res) =>{
    let id = req.params.id;
    let localizacao = await localizacaoTempoRealFacede.findById(id);
    if (!localizacao) {
        return res.status(404).json({ status: 'Localização nao encontrada ' });
    }
    let localizacao_body = req.body;
    const dataHoraBrasil = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
    localizacao_body['data'] = dataHoraBrasil;

    await localizacaoTempoRealFacede.update(id, localizacao_body );
    return res.status(200).json({ status: 'Localização atualizada ' });
});
app.get('/api/gps', async (req, res) => {
    let localizacoes = await localizacaoTempoRealFacede.findAll();
    res.json(localizacoes);
});
app.get('/api/gps/:id', async (req, res) =>{
    let id = req.params.id;
    let localizacao = await localizacaoTempoRealFacede.findById(id);
    if (!localizacao) {
        return res.status(404).json({ status: 'Localização nao encontrada ' });
    }
    return res.json(localizacao);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})