
module.exports = (sequelize , dataTypes) => {
    let alias = "user_rol";
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

     const user_rol = sequelize.define(alias , colds , config);

     
     return user_rol;
}