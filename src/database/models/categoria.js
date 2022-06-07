module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }
    };

    let config = {
        tableName: "categorias",
        timestamps: false,
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = (models) => {
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "categoryid"
        })
    }

    return Categoria;
}