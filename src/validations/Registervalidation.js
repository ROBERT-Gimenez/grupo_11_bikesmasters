const {check , body } = require('express-validator');
const req = require('express/lib/request');
const users = require('../data/users.json')

let Registervalidation=[
    check("name")
    .notEmpty().withMessage('ingrese un nombre').bail()
    .isLength({min:3}).withMessage('nombre no valido'),
    check("apellido")
    .notEmpty().withMessage('ingrese un nombre').bail()
    .isLength({min:3}).withMessage('nombre no valido'),
    check("num")
    .notEmpty().withMessage('ingrese su numero de telefono').bail()
    .isLength({min:9}).withMessage('ingrese un numero valido'),
    check("email")
    .notEmpty().withMessage('El Email es requerido').bail()
    .isEmail().withMessage('Ingrese un Email valido'),
    body("email").custom((value)=>{
        let user = users.find(user => user.email === value);
        if(user){
            return false;
        }else{
            return true;
        }
    }).withMessage('Email ya Registrado'),
    check("password")
    .notEmpty().withMessage('ingrese la contraseña')
    .isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres'),
    check("password2")
    .notEmpty().withMessage('ingrese nuevamente la contraseña anterior'),
    body("password2").custom((value ,{req})=>{
        if(value!==req.body.password){
            return false
        }else{
            return true;
        }
    }).withMessage('las contraseñas no coinciden'),
    check("terms")
    .isString("on").withMessage('Debes aceptar los terminos y condiciones')
]

module.exports = Registervalidation;