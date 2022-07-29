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
        direccion_id:{
            type:dataTypes.INTEGER(11),
            allowNull: true
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
            type: dataTypes.STRING(300),
        },
        avatar: {
            type: dataTypes.STRING(1000),
            allowNull: true
        },
        telefono: {
            type: dataTypes.INTEGER(20),
            allowNull: true
        },
        social_id: {
            type:dataTypes.STRING(100),
            defaultValue: null
        },
        social_provider: {
            type:dataTypes.STRING(100),
            defaultValue: null
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
        Usuario.belongsTo(models.UserRol, {
            as: "UserRol",
            foreignKey: "rol_id"
        })
        
        Usuario.belongsTo(models.Direccione, {
            as: "direccion",
            foreignKey: "direccion_id"
        })

        Usuario.belongsToMany(models.Producto, {
            as: "misProductos",
            through: "carrito",
            foreignKey: "usuario_id",
            otherKey: "product_id",
            timestamps: false
        }) 

    };

    return Usuario;
}