module.exports = (sequelize, dataTypes) => {
    let alias = "categoria";

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

    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = (models) => {
        categoria.hasMany(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
    }

    return categoria;
}