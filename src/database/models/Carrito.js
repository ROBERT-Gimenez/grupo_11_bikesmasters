module.exports = (sequelize, dataTypes) => {
    let alias = "Carrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        product_id:{
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        usurio_id: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        }
    }
    let config ={
        tableName:"carrito",
        timestamps:false,
    }
    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = (models)=>{
        Carrito.hasMany(models.Compra,{
            as:"compras",
            foreignKey: "carrito_id"
        })

        Carrito.hasMany(models.Producto,{
            as:"productos",
            foreignKey:"id"
        })
    }

return Carrito;
}