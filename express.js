const express = require('express')

// const moment = require('moment-timezone');

const routerUsuario = require('./routes/usuario_router');
const routerEndereco = require('./routes/endereco_router');
const routerContatoUsuario = require('./routes/contato_usuario_router');
const routerPets = require('./routes/pets_router');
const routerAreaSegura = require('./routes/area_segura_router');
const routerContatoPessoaEmergencia = require('./routes/contatos_pessoas_emergencia')
const app = express();
const port = 3000;

app.use(express.json());


app.use('/api/usuario', routerUsuario);

app.use('/api/endereco', routerEndereco);

app.use('/api/contatoUsuario', routerContatoUsuario);

app.use('/api/pets', routerPets);

app.use('/api/areaSegura', routerAreaSegura);
app.use('/api/contatoPessoasEmergencia', routerContatoPessoaEmergencia);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// pessoas_emergencia!

// const PessoaEmergenciaRepository = require('./repositories/pessoas_emergencias_repositories');
// const PessoaEmergenciaAplication = require('./aplication/pessoas_emergencias_aplication');
// const PessoaEmergenciaFacade = require('./facade/pessoa_emergencias_facade');

// const pessoaEmergenciaRepository = new PessoaEmergenciaRepository();
// const pessoaEmergenciaAplication = new PessoaEmergenciaRepository(pessoaEmergenciaRepository);
// const pessoaEmergenciaFacade = new PessoaEmergenciaAplication(pessoaEmergenciaAplication);

// //LOCALIZACAO TEMPO REAL
// const LocalizacaoTempoRealRepository = require('./repositories/localizacoes_tempo_real_repositories');
// const LocalizacaoTempoRealAplication = require('./aplication/localizacao_tempo_real_aplication');
// const LocalizacaoTempoRealFacade = require('./facade/localizacao_tempo_real_facade');
// const localizacaoTempoRealRepository = new LocalizacaoTempoRealRepository();
// const localizacaoTempoRealAplication = new LocalizacaoTempoRealRepository(localizacaoTempoRealRepository);
// const localizacaoTempoRealFacade = new LocalizacaoTempoRealAplication(localizacaoTempoRealAplication);

// //Criando rotas para ContatoPessoaEmergencia

// //Rotas para pessoas_emergencia


// app.post('/api/pessoaEmergencia', async (req, res) =>{
//     let pessoaEmergencia = req.body
//     await pessoaEmergenciaFacade.create(pessoaEmergencia);
//     res.json(pessoaEmergencia);
// })

// app.get('/api/pessoaEmergencia', async (req, res) => {
//     let pessoaEmergencia = await pessoaEmergenciaFacade.findAll();
//     res.json(pessoaEmergencia);
// })

// app.get('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let pessoaEmergencia = await pessoaEmergenciaFacade.findById(id);
//     res.json(pessoaEmergencia);
// })

// app.put('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     let pessoaEmergenciaBody = req.body;
//     let pessoaEmergencia = await pessoaEmergenciaFacade.update(id, pessoaEmergenciaBody);
//     res.json(pessoaEmergencia);
// })

// app.delete('/api/pessoaEmergencia/:id', async (req, res) => {
//     let id = req.params.id;
//     await pessoaEmergenciaFacade.delete(id);
//     res.status(200).json({status: "Pessoa emergencia deletado!"})
// })


// //Rotas Para Localização em tempo real
// app.post('/api/gps', async (req, res) => {
//     let localizacao = req.body;

//     const dataHoraBrasil = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
//     localizacao['data'] = dataHoraBrasil;

//     try {
//         await localizacaoTempoRealFacade.create(localizacao);
//         res.json(localizacao);

//     } catch (error) {
//         res.status(500).json({ error: 'Failed to save location' });
//     }
// });
// app.put('/api/gps/:id', async (req, res) =>{
//     let id = req.params.id;
//     let localizacao = await localizacaoTempoRealFacade.findById(id);
//     if (!localizacao) {
//         return res.status(404).json({ status: 'Localização nao encontrada ' });
//     }
//     let localizacao_body = req.body;
//     const dataHoraBrasil = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
//     localizacao_body['data'] = dataHoraBrasil;

//     await localizacaoTempoRealFacade.update(id, localizacao_body );
//     return res.status(200).json({ status: 'Localização atualizada ' });
// });
// app.get('/api/gps', async (req, res) => {
//     let localizacoes = await localizacaoTempoRealFacade.findAll();
//     res.json(localizacoes);
// });
// app.get('/api/gps/:id', async (req, res) =>{
//     let id = req.params.id;
//     let localizacao = await localizacaoTempoRealFacade.findById(id);
//     if (!localizacao) {
//         return res.status(404).json({ status: 'Localização nao encontrada ' });
//     }
//     return res.json(localizacao);
// });