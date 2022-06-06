module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        telefono: {
            type: dataTypes.INTEGER(20),
            allowNull: true
        },
        direccion_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        rol_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }

    let config = {
        tablename: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config)

    //Crear relacion con carrito, productos, direcciones

    return Usuario
}