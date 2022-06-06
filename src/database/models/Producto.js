module.exports = (sequelize, dataTypes) => {
    let alias = "Producto"

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        categoryid: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true
        },
/*         fecha_creacion: {
            type: dataTypes.DATE,
            allowNull: false
        },
        ultima_modificacion: {
            type: dataTypes.DATE,
            allowNull: false
        }, */
        marca: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        enable: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
        }

    let config = {
        tablename: "productos",
        timestamps: false,
    }

    const Producto = sequelize.define(alias, cols, config)

    Producto.associate = (models) => {
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoryid"
        })

        Producto.belongsTo(models.Usuario, {
            as: "user",
            foreignKey: "user_id"
        })
    }

    return Producto
}