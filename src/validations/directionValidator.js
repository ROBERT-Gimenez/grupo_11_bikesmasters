const { check } = require('express-validator');
const db = require('../database/models')


const directioValidator = [
    check("direccion").notEmpty().withMessage("Complete el campo").bail()
        .isLength({min: 4}).withMessage("No se reconoce dirección")
        .not().isAlpha().withMessage("No debe tener caracteres especiales")
]