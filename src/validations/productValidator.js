const {check, body} = require('express-validator')

const productValidator = [
    check("name").notEmpty().withMessage("*Ingrese un nombre").bail()
        .isLength({min: 3}).withMessage("*Nombre ingresado no válido"),
    check("price").notEmpty().withMessage("Ingrese el precio").bail()
        .isNumeric().withMessage("*Formato ingresado no válido"),
    check("stock").notEmpty().withMessage("*Ingrese una cantidad").bail()
        .isNumeric().withMessage("Formato ingresado no válido"),
    body("categoryid").custom(value => {
        if(value !== "0") {
            return true
        }
        return false
    }).withMessage("Seleccione una categoría"),
    body("discount").custom(value => {
            if(value >= 0 && value <= 100){
                return true;
            }
            return false;
        }).withMessage("El descuento tiene que tener un valor entre 0 y 100"),
    check("description").notEmpty().withMessage("*Ingrese detalles del producto")
]

module.exports = productValidator