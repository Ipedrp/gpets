module.exports = (sequelize, DataTypes) => {
    const Enderecos = sequelize.define(
        "enderecos",
        {
            id_endereco: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,

            },
            uf: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            municipio: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            bairro:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            rua:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            logradouro:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            numero:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cep:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            complemento:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            fk_usuario:{
                type: DataTypes.INTEGER,
                allowNull: false,

            }
        },
        { freezeTableName: true, timestamps: false }
    );

    return Enderecos;
}