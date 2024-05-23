const express = require('express')

// const moment = require('moment-timezone');

const routerUsuario = require('./routes/usuario_router');
const routerEndereco = require('./routes/endereco_router');
const routerContatoUsuario = require('./routes/contato_usuario_router');
const routerPets = require('./routes/pets_router');
const routerAreaSegura = require('./routes/area_segura_router');
const app = express();
const port = 3000;

app.use(express.json());


app.use('/api/usuario', routerUsuario);

app.use('/api/endereco', routerEndereco);

app.use('/api/contatoUsuario', routerContatoUsuario);

app.use('/api/pets', routerPets);

app.use('/api/areaSegura', routerAreaSegura);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// ContatoPessoaEmergencia
// const ContatoPessoaEmergenciaRepository = require('./repositories/contatos_pessoas_emergencias_repositories');
// const ContatoPessoaEmergenciaAplication = require('./aplication/contato_pessoa_emergencia_aplication');
// const ContatoPessoaEmergenciaFacede = require('./facade/contato_pessoa_emergencia_facede');

// const contatoPessoaEmergenciaRepository = new ContatoPessoaEmergenciaRepository();
// const contatoPessoaEmergenciaAplication = new ContatoPessoaEmergenciaRepository(contatoPessoaEmergenciaRepository);
// const contatoPessoaEmergenciaFacede = new ContatoPessoaEmergenciaAplication(contatoPessoaEmergenciaAplication);

// pessoas_emergencia!

// const PessoaEmergenciaRepository = require('./repositories/pessoas_emergencias_repositories');
// const PessoaEmergenciaAplication = require('./aplication/pessoas_emergencias_aplication');
// const PessoaEmergenciaFacede = require('./facade/pessoa_emergencias_facede');

// const pessoaEmergenciaRepository = new PessoaEmergenciaRepository();
// const pessoaEmergenciaAplication = new PessoaEmergenciaRepository(pessoaEmergenciaRepository);
// const pessoaEmergenciaFacede = new PessoaEmergenciaAplication(pessoaEmergenciaAplication);

// //LOCALIZACAO TEMPO REAL
// const LocalizacaoTempoRealRepository = require('./repositories/localizacoes_tempo_real_repositories');
// const LocalizacaoTempoRealAplication = require('./aplication/localizacao_tempo_real_aplication');
// const LocalizacaoTempoRealFacede = require('./facade/localizacao_tempo_real_facede');
// const localizacaoTempoRealRepository = new LocalizacaoTempoRealRepository();
// const localizacaoTempoRealAplication = new LocalizacaoTempoRealRepository(localizacaoTempoRealRepository);
// const localizacaoTempoRealFacede = new LocalizacaoTempoRealAplication(localizacaoTempoRealAplication);

// const areaSeguraRepository = new AreaSeguraRepository();
// const areaSeguraAplication = new AreaSeguraRepository(areaSeguraRepository);
// const areaSeguraFacede = new AreaSeguraAplication(areaSeguraAplication);


// //Criando rotas para ContatoPessoaEmergencia

// app.post('/api/contatoPessoaEmergencia', async (req, res) =>{
//     let contatoPessoaEmergencia = req.body
//     await contatoPessoaEmergenciaFacede.create(contatoPessoaEmergencia);
//     res.json(contatoPessoaEmergencia);
// })

// app.get('/api/contatoPessoaEmergencia', async (req, res) => {
//     let contatoPessoaEmergencia = await contatoPessoaEmergenciaFacede.findAll();
//     res.json(contatoPessoaEmergencia);
// })

// app.get('/api/contatoPessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let contatoPessoaEmergencia = await contatoPessoaEmergenciaFacede.findById(id);
//     res.json(contatoPessoaEmergencia);
// })


// app.put('/api/contatoPessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let contatoPessoaEmergenciaBody = req.body;
//     console.log(contatoPessoaEmergenciaBody);
//     let contatoPessoaEmergencia = await contatoPessoaEmergenciaFacede.update(id, contatoPessoaEmergenciaBody);
//     res.json(contatoPessoaEmergencia);
// })

// app.delete('/api/contatoPessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     await contatoPessoaEmergenciaFacede.delete(id);
//     res.status(200).json({status: "Contato deletado!"})
// })



// //Rotas para pessoas_emergencia


// app.post('/api/pessoaEmergencia', async (req, res) =>{
//     let pessoaEmergencia = req.body
//     await pessoaEmergenciaFacede.create(pessoaEmergencia);
//     res.json(pessoaEmergencia);
// })

// app.get('/api/pessoaEmergencia', async (req, res) => {
//     let pessoaEmergencia = await pessoaEmergenciaFacede.findAll();
//     res.json(pessoaEmergencia);
// })

// app.get('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let pessoaEmergencia = await pessoaEmergenciaFacede.findById(id);
//     res.json(pessoaEmergencia);
// })

// app.put('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let pessoaEmergenciaBody = req.body;
//     let pessoaEmergencia = await pessoaEmergenciaFacede.update(id, pessoaEmergenciaBody);
//     res.json(pessoaEmergencia);
// })

// app.delete('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     await pessoaEmergenciaFacede.delete(id);
//     res.status(200).json({status: "Pessoa emergencia deletado!"})
// })


// //Rotas Para Localização em tempo real
// app.post('/api/gps', async (req, res) => {
//     let localizacao = req.body;

//     const dataHoraBrasil = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
//     localizacao['data'] = dataHoraBrasil;

//     try {
//         await localizacaoTempoRealFacede.create(localizacao);
//         res.json(localizacao);

//     } catch (error) {
//         res.status(500).json({ error: 'Failed to save location' });
//     }
// });
// app.put('/api/gps/:id', async (req, res) =>{
//     let id = req.params.id;
//     let localizacao = await localizacaoTempoRealFacede.findById(id);
//     if (!localizacao) {
//         return res.status(404).json({ status: 'Localização nao encontrada ' });
//     }
//     let localizacao_body = req.body;
//     const dataHoraBrasil = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
//     localizacao_body['data'] = dataHoraBrasil;

//     await localizacaoTempoRealFacede.update(id, localizacao_body );
//     return res.status(200).json({ status: 'Localização atualizada ' });
// });
// app.get('/api/gps', async (req, res) => {
//     let localizacoes = await localizacaoTempoRealFacede.findAll();
//     res.json(localizacoes);
// });
// app.get('/api/gps/:id', async (req, res) =>{
//     let id = req.params.id;
//     let localizacao = await localizacaoTempoRealFacede.findById(id);
//     if (!localizacao) {
//         return res.status(404).json({ status: 'Localização nao encontrada ' });
//     }
//     return res.json(localizacao);
// });