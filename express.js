const express = require('express')


const routerUsuario = require('./routes/usuario_router');
const routerEndereco = require('./routes/endereco_router');
const routerContatoUsuario = require('./routes/contato_usuario_router');
const routerPets = require('./routes/pets_router');
const routerAreaSegura = require('./routes/area_segura_router');
const routerContatoPessoaEmergencia = require('./routes/contatos_pessoas_emergencia');
const routerPessoaEmergencia = require('./routes/contatos_pessoas_emergencia');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/usuario', routerUsuario);

app.use('/api/endereco', routerEndereco);

app.use('/api/contatoUsuario', routerContatoUsuario);

app.use('/api/pets', routerPets);

app.use('/api/areaSegura', routerAreaSegura);

app.use('/api/contatoPessoasEmergencia', routerContatoPessoaEmergencia);

app.use('/api/pessoaEmergencia', routerPessoaEmergencia);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
