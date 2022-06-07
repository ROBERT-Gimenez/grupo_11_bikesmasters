module.exports = (sequelize, dataTypes) => {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL(10.0),
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        categoryid: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        stock: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        image:{
            type:dataTypes.STRING(100)
        },
    }
    let config = {
        tableName: "productos",
        timestamps: true,
        createdAt :"fecha_creacion",
        updatedAt :"ultima_modificacion"

    }

    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = (models) => {
        Producto.belongsTo(models.Categoria, {
            as: "category",
            foreignKey: "categoryid",
        })
    }
    return Producto;
}