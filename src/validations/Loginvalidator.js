const { check, body } = require('express-validator');
/* const {users} = require('../data'); */
let bcrypt = require('bcryptjs');
const db =require('../database/models')

let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("custom").custom((value, { req }) => {
       /*  let user = users.find(user => user.email === req.body.email); */
    return db.Usuario.findOne({where:{email:req.body.email}})
        .then(( user ) => {
            if(!bcrypt.compareSync(req.body.password, user.password)){
                return Promise.reject()
            }
        }).catch((error) => {
            return Promise.reject("Email o contraseña incorrecto")
        })


    }),
    check("password")
        .notEmpty().withMessage("Contraseña Invalida"),
]

module.exports = validateLogin;