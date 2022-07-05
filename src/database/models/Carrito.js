module.exports = (sequelize, dataTypes) => {
    let alias = "Carrito";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        usuario_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    };

    let config = {
        tableName: "carrito",
        timestamps: false,
    };

    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = (models) => {
        Carrito.hasMany(models.Producto, {
            as: "Producto",
            foreignKey: "id"
        })
        Carrito.belongsTo(models.Usuario , {
            as:"Usuario",
            foreignKey:"usuario_id"
        })
    }

    return Carrito;
}