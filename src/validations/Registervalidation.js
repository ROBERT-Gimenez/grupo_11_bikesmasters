const {check , body } = require('express-validator');
const db = require('../database/models')

let registerValidation=[
    check("name")
    .notEmpty().withMessage('Ingrese un nombre').bail()
    .isLength({min:3, max:50}).withMessage('El máximo de caracteres tiene que ser de 50'),
    check("email")
    .notEmpty().withMessage('El email es requerido').bail()
    .isEmail().withMessage('Ingrese un email valido'),
    body("email").custom((value)=>{
        return db.Usuario.findOne({where:{email: value}})
        .then((user) => {
            if(user){
                return Promise.reject("Email ya registrado")
            }
        })
    }),
    check("password")
    .notEmpty().withMessage('Ingrese una contraseña')
    .isLength({min:8, max:12}).withMessage('La contraseña debe tener al menos 8 caracteres'),
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