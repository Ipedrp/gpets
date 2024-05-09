module.exports = (sequelize, DataTypes) => {
    const Localizacoes_tempo_real = sequelize.define(
        "localizacoes_tempo_real",
        {
            id_localizacao_tempo_real: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            latitude:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            longitude:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            data:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            horario:{
                type: DataTypes.TIME,
                allowNull: false,
            },
            fk_pet:{
                type: DataTypes.INTEGER,
                allowNull: false,

            }
        },
        { freezeTableName: true, timestamps: false }
    );

    return Localizacoes_tempo_real;
}