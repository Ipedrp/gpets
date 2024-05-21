const express = require('express')
const moment = require('moment-timezone');

//Acessando requisições e crindo um novo objeto da tabela usuario!

//USUARIOS METHODS 
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

//criando metodos da tabela areaSegura
const AreaSeguraRepository = require('./repositories/areas_seguras_repositories');
const AreaSeguraAplication = require('./aplication/areas_seguras_aplication');
const AreaSeguraFacede = require('./facede/area_segura_facede');
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

const areaSeguraRepository = new AreaSeguraRepository();
const areaSeguraAplication = new AreaSeguraRepository(areaSeguraRepository);
const areaSeguraFacede = new AreaSeguraAplication(areaSeguraAplication);

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
    let usuario = await usuarioFacede.update(id, usuarioBody);
    res.json(usuario);
})

app.delete('/api/usuario/:id', async (req, res) => {
    let id = req.params.id;
    await usuarioFacede.delete(id);
    res.status(200).json({ status: "Usuario deletado!" })
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