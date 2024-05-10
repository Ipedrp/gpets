module.exports = (sequelize, DataTypes) => {
    const Pessoas_Emergencias = sequelize.define(
        "pessoas_emergencias",
        {
            id_pessoa_emergencia:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                allowNull:false,
                autoIncrement:true,
                unique: true,
            },
            nome:{
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

    return Pessoas_Emergencias;
}