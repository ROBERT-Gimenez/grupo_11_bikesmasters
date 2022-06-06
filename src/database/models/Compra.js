module.exports = (sequelize, DataTypes)=>{
let alias = "Compra";
let cols ={
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fecha_de_compra:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    carrito_id:{
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    fecha_de_entrega:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    pago_final:{
        type: DataTypes.STRING(20),
        allowNull: false,
    }
}
let config ={
    tableName:"compras",
    timestamps:false,
}

const Compra = sequelize.define(alias, cols, config);

Compra.associate = (models) =>{
    Compra.belongsTo(models.Carrito,{
        as:"carrito",
        foreignKey:"id"
    })
}


return Compra;
}