const express = require('express')

const routerUsuario = require('./routes/usuario_router');
const routerEndereco = require('./routes/endereco_router');
const routerContatoUsuario = require('./routes/contato_usuario_router');
const routerPets = require('./routes/pets_router');
const routerAreaSegura = require('./routes/area_segura_router');
const routerContatoPessoaEmergencia = require('./routes/contatos_pessoas_emergencia');
const routerPessoaEmergencia = require('./routes/contatos_pessoas_emergencia');
const routerLocalizacaoTempoReal = require('./routes/localizacao_tempo_real');
const routerAuth = require("./routes/auth_router");
const isAuth = require('./middleware/is_auth');


const app = express();
const port = 3000;

app.use(express.json());


app.use('/api/usuario', routerUsuario);

app.use('/api/endereco',routerEndereco);

app.use('/api/contatoUsuario', isAuth,routerContatoUsuario);

app.use('/api/pets',isAuth, routerPets);

app.use('/api/areaSegura', routerAreaSegura);

app.use('/api/contatoPessoasEmergencia', isAuth, routerContatoPessoaEmergencia);

app.use('/api/pessoaEmergencia', isAuth, routerPessoaEmergencia);

app.use('/api/localizacaoTempoReal',  routerLocalizacaoTempoReal);

app.use("/api/auth", routerAuth);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
