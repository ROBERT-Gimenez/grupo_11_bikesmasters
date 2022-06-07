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
            type: dataTypes.INTEGER(11),
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
        },
        image:{
            type:dataTypes.STRING(100)
        },
        marca:{
            type:dataTypes.STRING(60),
            allowNull: false,
        }
    }
    let config = {
        tableName: "productos",
        timestamps: true,
    }

    const Producto = sequelize.define(alias, cols, config);

    
    Producto.associate = (models) => {
       
        Producto.belongsTo(models.categoria, {
            as: "categoria",
            foreignKey: "categoryid",
        })
    }
    

    return Producto;
}