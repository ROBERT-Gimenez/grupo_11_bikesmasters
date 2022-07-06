module.exports = (sequelize, dataTypes) => {
    let alias = "Direccione"

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
            allowNull: true
        },
        pais: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        provincia: {
            type: dataTypes.STRING(40),
            allowNull: true
        }
    }

    let config = {
        tablename: "direcciones",
        timestamps: false
    }

    const Direccione = sequelize.define(alias, cols, config)

/*     Direccione.associate = (models) => {
        Direccione.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "direccion_id"
        })
    } */

    return Direccione
}