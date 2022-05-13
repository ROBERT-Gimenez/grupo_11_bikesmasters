const {check , body } = require('express-validator');
const users = require('../data/users.json')

let registerValidation=[
    check("name")
    .notEmpty().withMessage('Ingrese un nombre').bail()
    .isLength({min:3, max:50}).withMessage('Nombre no válido'),
    check("email")
    .notEmpty().withMessage('El email es requerido').bail()
    .isEmail().withMessage('Ingrese un email valido'),
    body("email").custom((value)=>{
        let user = users.find(user => user.email === value);
        if(user){
            return false;
        }else{
            return true;
        }
    }).withMessage('El email ya está registrado'),
    check("password")
    .notEmpty().withMessage('Ingrese una contraseña')
    .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check("password2")
    .notEmpty().withMessage('Ingrese nuevamente la contraseña'),
    body("password2").custom((value ,{req})=>{
        if(value!==req.body.password){
            return false
        }else{
            return true;
        }
    }).withMessage('Las contraseñas no coinciden'),
    check("terms")
    .isString("on").withMessage('Debes aceptar los terminos y condiciones')
]

module.exports = registerValidation;