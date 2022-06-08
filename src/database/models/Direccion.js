module.exports = (sequelize, dataTypes) => {
    let alias = "Direccion"

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        direccion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        altura: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        codigo_postal: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        localidad: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        pais: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        provincia: {
            type: dataTypes.STRING(40),
            allowNull: false
        }
    }

    let config = {
        tablename: "direcciones",
        timestamps: false
    }

    const Direccion = sequelize.define(alias, cols, config)

    return Direccion
}