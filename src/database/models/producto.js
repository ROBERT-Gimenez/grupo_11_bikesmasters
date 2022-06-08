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
            type: dataTypes.INTEGER(11)
            
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
            type: dataTypes.INTEGER(5),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        image:{
            type:dataTypes.STRING(100),
        },
        price: {
            type: dataTypes.DECIMAL(10.0),
            allowNull: false,
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            
        }
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = (models) => {
        Producto.belongsTo(models.Categoria, {
            as: "category",
            foreignKey: "categoryid",
        })
        Producto.belongsTo(models.Usuario, {
            as: "Usuario",
            foreignKey: "user_id",
        })

      

        
    }
    return Producto;
}