module.exports = (sequelize, DataTypes)=>{
    let alias = "Categoria";
    let cols ={
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        nombre:{
            type:DataTypes.STRING(60),
            allowNull: false,
        },
    }
    let config ={
        tableName:"categoria",
        timestamps:false,
    }
    
    const Categoria = sequelize.define(alias, cols, config);
   
    Categoria.associate = (models) => {
        Categoria.hasMany(models.Producto, {
            as:"productos",
            foreignKey:"categoryid"
        })
    }

    return Categoria;
  
    }