const {check, body} = require('express-validator')

let directioValidator = [
    check("direccion").notEmpty().withMessage("Complete el campo").bail()
        .isLength({min: 4}).withMessage("No se reconoce dirección")
        .not().isAlpha().withMessage("No debe tener caracteres especiales"),
    check("altura").notEmpty().withMessage("Ingrese la Altura de la Calle").bail()
        .isNumeric().withMessage("Formato ingresado no válido"),
    check("postal").notEmpty().withMessage("Ingrese Un Codigo Postal Valido").bail()
        .isNumeric().withMessage("Formato ingresado no válido"),
    body("provincia").custom(value => {
            if(value !== "") {
                return true
            }
            return false
        }).withMessage("Seleccione una categoría"),
    body("localidad").custom(value => {
            if(value !== "") {
                return true
            }
            return false
        }).withMessage("Seleccione una categoría"),
        
]
module.exports = directioValidator;