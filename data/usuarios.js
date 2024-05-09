module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define(
        "usuarios",
        {
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,

            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            senha:{
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        { freezeTableName: true, timestamps: false }
    );

    return Usuarios;
}