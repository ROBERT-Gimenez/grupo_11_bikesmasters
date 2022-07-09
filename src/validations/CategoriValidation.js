const {check} = require('express-validator')

const CategoriValidation = [
    check('nombre').notEmpty().withMessage('El Campo no puede estar Vacio').bail()
    .not().isNumeric().withMessage("No debe contener números o caracteres especiales")
    .isLength({min:4, max:20}).withMessage('Nombre no válido')
]

module.exports = CategoriValidation