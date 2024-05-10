module.exports = (sequelize, DataTypes) => {
    const Pets = sequelize.define(
        "pets",
        {
            id_pet:{
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
            especie:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            raca:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            idade:{
                type: DataTypes.INTEGER,
                allowNull: false, 
            },
            peso:{
                type: DataTypes.DOUBLE,
                allowNull: false, 
            },
            fk_usuario:{
                type: DataTypes.INTEGER,
                allowNull: false,

            }

        },
        { freezeTableName: true, timestamps: false }
    );

    return Pets;
}