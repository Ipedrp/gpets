module.exports = (sequelize, DataTypes) => {
    const Contatos_pessoas_emergencias = sequelize.define(
        "contatos_pessoas_emergencias",
        {
            id_contato_pessoa_emergencia:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                allowNull:false,
                autoIncriment:true,
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
            fk_pessoa_emergencia:{
                type: DataTypes.INTEGER,
                allowNull: false,

            }

        },
        { freezeTableName: true, timestamps: false }
    );

    return Contatos_pessoas_emergencias;
}