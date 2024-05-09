module.exports = (sequelize, DataTypes) => {
    const Areas_seguras = sequelize.define(
        "areas_seguras",
        {
            id_area_segura: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            quadrante1_eixo_x: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            quadrante1_eixo_y: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quadrante2_eixo_x:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            quadrante2_eixo_y:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            quadrante3_eixo_x:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            quadrante3_eixo_y:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            quadrante4_eixo_x:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            quadrante4_eixo_y:{
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

    return Areas_seguras;
}