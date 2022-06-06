module.exports = (sequelize, DataTypes)=>{
    let alias = "Producto";
    let cols ={
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING(60),
            allowNull: false,
        },
        categoryid:{
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        descripion:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        fecha_creacion:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        ultima_modificacion:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        marca:{
            type:DataTypes.STRING(60),
            allowNull: false,
        },
        discount:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },
        stock:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
        },
        enable:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },

    }
    let config ={
        tableName:"productos",
        timestamps:false,
    }
    
    const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = (models)=>{
        Producto.belongsTo(models.Categoria,{
            as: "categoria",
            foreignKey: "id"
        })
        Producto.hasMany(models.Carrito,{
            as:"carritos",
            foreignKey:"product_id"
        })
        Producto.hasMany(models.Usuario,{
            as:"usuarios",
            foreignKey: "product_id"
        })
    };
    
    return Producto;
    }