const { check, body } = require('express-validator');
let bcrypt = require('bcryptjs');
const db =require('../database/models')

let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    check("password")
            .notEmpty().withMessage("Ingrese una contraseña")
            .isLength({min: 8}),
    body("email").custom((value, { req }) => {
        return db.Usuario.findOne({
            where:
                {email: req.body.email}
            })
            .then(( user ) => {
                let contraseña = bcrypt.compareSync(req.body.password, user.password)
                if(contraseña){
                    return user
                }
            })
            .catch((error) => {
                return Promise.reject("Email o contraseña incorrecto")
            })
    })
]

module.exports = validateLogin;