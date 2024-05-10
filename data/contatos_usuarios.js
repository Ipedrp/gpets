module.exports = (sequelize, DataTypes) => {
    const Contatos_usuarios = sequelize.define(
        "contatos_usuarios",
        {
            id_contato_usuario:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                allowNull:false,
                autoIncrement:true,
                unique: true,
            },
            tipo:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            descricao:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            fk_usuario:{
                type: DataTypes.INTEGER,
                allowNull: true,

            }

        },
        { freezeTableName: true, timestamps: false }
    );

    return Contatos_usuarios;
}