module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        rol_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(100),
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
        Usuario.belongsTo(models.user_rol, {
            as: "user_rol",
            foreignKey: "rol_id"
        })
        
    };

    return Usuario;
}