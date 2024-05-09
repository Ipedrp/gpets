
const PetsRepositories = require("./repositories/pets_repositories");
const UsuarioRepository = require("./repositories/usuarios_repositories");
const ContatosUsuariosRepository = require("./repositories/contatos_usuarios_repositories");
const AreaSeguraRepository =  require("./repositories/areas_seguras_repositories");
const ContatoPessoaEmergenciaRepository = require("./repositories/contatos_pessoas_emergencias_repositories");
const EnderecoRepository = require("./repositories/enderecos_repositories");
const LocalizacaoTempoRealRepository = require("./repositories/localizacoes_tempo_real_repositories");
const PessoaEmergenciaRepository = require("./repositories/pessoas_emergencias_repositories");


let usuarioRepository = new UsuarioRepository();
let contatosUsuariosRepository  = new ContatosUsuariosRepository();
let petsRepositories = new PetsRepositories();
let areaSeguraRepository = new AreaSeguraRepository();
let contatoPessoaEmergenciaRepository = new ContatoPessoaEmergenciaRepository();
let enderecoRepository = new EnderecoRepository();
let localizacaoTempoRealRepository = new LocalizacaoTempoRealRepository();
let pessoaEmergenciaRepository = new PessoaEmergenciaRepository();



usuarioRepository.create(
    {   

        nome: "jefté", 
        email: "teste", 
        senha: "123"
    });

contatosUsuariosRepository.create(
    {
        id_contato_usuario: 1,
        tipo: "Telefone", 
        descricao:"75983633860", 
        fk_usuario: 1
    });

petsRepositories.create(
    {
        id_pet: 1,
        nome:"Thiago", 
        especie: "Cachorro", 
        raca: "Caramelo", 
        idade: "65", 
        peso: 255.00, 
        fk_usuario: 1
    });

areaSeguraRepository.create(
    {
        id_area_segura: 1,
        quadrante1_eixo_x: "10",
        quadrante1_eixo_y: "10",
        quadrante2_eixo_x: "30",
        quadrante2_eixo_y: "30",
        quadrante3_eixo_x: "50",
        quadrante3_eixo_y: "50",
        quadrante4_eixo_x: "70",
        quadrante4_eixo_y: "70",
        data: new Date(),
        horario: "10:30:00",
        fk_pet: 1
    });

contatoPessoaEmergenciaRepository.create(
    {
        id_contato_pessoa_emergencia: 1,
        tipo: "Telefone",
        descricao: "75992477349",
        fk_pessoa_emergencia: 1

    });

enderecoRepository.create(
    {
        id_endereco: 1,
        uf: "Ba",
        municipio: "Feira de Santana",
        bairro: "Campo limpo",
        rua: "Monsenhor Moisés",
        logradouro: "Avenida",
        numero: 851,
        cep: "48950-524",
        complemento: "casa",
        fk_usuario: 1

    }); 

localizacaoTempoRealRepository.create(
    {
        id_localizacao_tempo_real: 1,
        latitude: "10.123456",
        longitude: "14.85479",
        data: new Date(),
        horario: "14:20:00",
        fk_pet: 1

    });

pessoaEmergenciaRepository.create(
    {
        id_pessoa_emergencia: 1,
        nome: "Pedro Paulo",
        fk_usuario: 1

    });

