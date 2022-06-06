module.exports = (sequelize, DataTypes)=>{
    let alias = "Direccion";
    let cols ={
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        direccion:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        altura:{
            type:DataTypes.STRING(20),
            allowNull: false,
        },
        codigo_postal:{
            type:DataTypes.STRING(10),
            allowNull: false,
        },
        localidad:{
            type:DataTypes.STRING(50),
            allowNull: false,
        },
        pais:{
            type:DataTypes.STRING(40),
            allowNull: false,
        },
        provincia:{
            type:DataTypes.STRING(40),
            allowNull: false,
        },

    }
    let config ={
        tableName:"direcciones",
        timestamps:false,
    }
    
    const Direccion = sequelize.define(alias, cols, config);
    Direccion.associate =(models)=>{
        Direccion.belongsTo(models.Usuario,{
            as:"usuario",
            foreignKey:"id"
        })
    }

    return Direccion;
    }