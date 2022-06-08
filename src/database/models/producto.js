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
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        categoryid: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        marca: {
            type: dataTypes.STRING(60),
            allowNull: true
        },
        discount: {
            type: dataTypes.BOOLEAN(),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10.0),
            allowNull: false,
        },
        stock: {
            type: dataTypes.INTEGER(11),
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