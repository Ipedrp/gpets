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

  //Realizando relacionamento entre tabelas pela foreign Key
  Usuarios.hasMany(Enderecos, { //usuarios tem muitos Endereços
    foreignKey: "fk_usuario"
  })

  Enderecos.belongsTo(Usuarios, { // Endereços pertence a Usuarios
    foreignKey: "fk_usuario"
  })

  Usuarios.hasMany(Contatos_usuarios, { //usuarios tem muitos Contatos_usuarios
    foreignKey: "fk_usuario"
  })

  Contatos_usuarios.belongsTo(Usuarios, { // Contatos_usuarios pertence a Usuarios
    foreignKey: "fk_usuario"
  })

  Usuarios.hasMany(Pessoas_Emergencias, { //usuarios tem muitas Pessoas_Emergencias
    foreignKey: "fk_usuario"
  })

  Pessoas_Emergencias.belongsTo(Usuarios, { // Pessoas_Emergencias pertence a Usuarios
    foreignKey: "fk_usuario"
  })

  Usuarios.hasMany(Pets, { //usuarios tem muitos Pets
    foreignKey: "fk_usuario"
  })

  Pets.belongsTo(Usuarios, { // Pets pertence a Usuarios
    foreignKey: "fk_usuario"
  })

  Pets.hasMany(Localizacoes_tempo_real, { //Pets tem muitAs Localizacoes_tempo_real (histórico)
    foreignKey: "fk_pet"
  })

  Localizacoes_tempo_real.belongsTo(Pets, { // Localizacoes_tempo_real pertence a Pets
    foreignKey: "fk_pet"
  })

  Pets.hasMany(Areas_seguras, { //Pets tem muitas Areas_seguras
    foreignKey: "fk_pet"
  })

  Areas_seguras.belongsTo(Pets, { // Areas_seguras pertence a Pets
    foreignKey: "fk_pet"
  })

  Pessoas_Emergencias.hasMany(Contatos_pessoas_emergencias, { //Pessoas_Emergencias tem muitos Contatos_pessoas_emergencias
    foreignKey: "fk_pessoa_emergencia"
  })

  Contatos_pessoas_emergencias.belongsTo(Pessoas_Emergencias, { // Contatos_pessoas_emergencias pertence a Pessoas_Emergencias
    foreignKey: "fk_pessoa_emergencia"
  })




module.exports = { Usuarios, Contatos_usuarios, Pets, Enderecos, Areas_seguras, Contatos_pessoas_emergencias, Localizacoes_tempo_real, Pessoas_Emergencias}