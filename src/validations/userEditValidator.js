const {check} = require('express-validator')

const userEditValidator = [
    check('name').notEmpty().withMessage('Debe tener un nombre').bail()
    .not().isNumeric().withMessage("No debe contener números o caracteres especiales"),
]

module.exports = userEditValidator