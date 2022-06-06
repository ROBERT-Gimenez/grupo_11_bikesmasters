module.exports = (sequelize, dataTypes) => {
    let alias = "User_rol";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        nombre: {
            type: dataTypes.STRING(60),
            allowNull: true,
        }
    }
    let config ={
        tableName:"user_rol",
        timestamps:false,
    }
    const User_rol = sequelize.define(alias, cols, config);
    User_rol.associate = (models)=> {
        User_rol.hasMany(models.Usuario,{
            as: "usuarios",
            foreignKey:"rol_id"
        })
    };


return User_rol;
}