const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
  }
);

const Usuarios = require("./usuarios")(sequelize, DataTypes);
const Contatos_usuarios = require("./contatos_usuarios")(sequelize, DataTypes);
const Pets = require("./pets")(sequelize, DataTypes);
const Enderecos = require("./enderecos")(sequelize, DataTypes);
const Areas_seguras = require("./areas_seguras")(sequelize, DataTypes);
const Contatos_pessoas_emergencias = require("./contatos_pessoas_emergencias")(sequelize, DataTypes);
const Localizacoes_tempo_real = require("./localizacoes_tempo_real")(sequelize, DataTypes);
const Pessoas_Emergencias = require("./pessoas_emergencias")(sequelize, DataTypes);


sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro ao tentar conectar: " + erro);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
  })
  .catch((err) => {
    console.log("Erros: " + err);
  });

module.exports = { Usuarios, Contatos_usuarios, Pets, Enderecos, Areas_seguras, Contatos_pessoas_emergencias, Localizacoes_tempo_real, Pessoas_Emergencias}