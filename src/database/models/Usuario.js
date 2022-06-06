module.exports = (sequelize, DataTypes)=>{
    let alias = "Usuario";
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
        email:{
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING(20),
            allowNull: false,
        },
        telefono:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        product_id:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        direccion_id:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        rol_id:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        avatar:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },

    }
    let config ={
        tableName:"usuarios",
        timestamps:false,
    }
    
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = (models) => {
        Usuario.belongsTo(models.User_rol,{
            as:"user_rol",
            foreignKey:"User_rol_id"
        })
        Usuario.belongsTo(models.Direccion,{
            as:"direccion",
            foreignKey: "id"
        })
        Usuario.hasMany(models.Carrito,{
            as: "carritos",
            foreignKey: "usuario_id"
        })
        Usuario.hasMany(models.Producto, {
            as:"productos",
            foreignKey: "id"
        })
    }

    return Usuario;
    }