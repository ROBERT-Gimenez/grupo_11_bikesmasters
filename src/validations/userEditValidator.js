const {check} = require('express-validator')

const userEditValidator = [
    check('name').notEmpty().withMessage('Debe tener un nombre').bail()
        .isAlpha().withMessage("No debe contener números o caracteres especiales"),
    check('telefono').isNumeric().bail()
        .isAlphanumeric().withMessage("Debe ingresar un número válido")
]

module.exports = userEditValidator