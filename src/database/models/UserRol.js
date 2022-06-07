
module.exports = (sequelize , dataTypes) => {
    let alias = "UserRol";
    let colds = {
            id :{
                type:dataTypes.INTEGER(11),
                primaryKey:true ,
                autoincrement:true,
                allowNull:false,
            },
            nombre:{
                type:dataTypes.STRING(60),
                allowNull:false,
            },
            
    };
     let config = {
            tableName:"user_rol",
            timestamps:false ,
            
     }

     const UserRol = sequelize.define(alias , colds , config);

     UserRol.associate = (models) => {
        UserRol.hasMany(models.Usuario , {
            as:"Usuarios",
            foreignKey:"rol_id"
        })
     }
     return UserRol;
}