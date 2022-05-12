const { check, body } = require('express-validator');
const {users} = require('../data');
let bcrypt =require('bcryptjs');
let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("custom").custom((value, { req })=>{
        let user = users.find(user => user.email === req.body.email);
        if(bcrypt.compareSync(user.password,req.body.password )){
            return true;
        }
        return false;
    }).withMessage("Email o contraseña incorrecto"),
    check("password")
        .notEmpty().withMessage("Contraseña Invalida"),
]

module.exports = validateLogin;