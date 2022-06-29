const { check, body } = require('express-validator');
const bcrypt = require("bcryptjs");
const db =require('../database/models')

let validateLogin = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    check("password")
            .notEmpty().withMessage("Ingrese una contraseña")
            .isLength({min: 8}),
    body("custom").custom((value, { req }) => {
        return db.Usuario.findOne({
            where:{
                email: req.body.email,}
            })
            .then(( user ) => {
                let validacion = bcrypt.compareSync(req.body.password, user.password)
                console.log(validacion)
            

    
                if(!bcrypt.compareSync(req.body.password, user.password)){
                    return Promise.reject()
                    
                }
            }).catch((error) => {
                return Promise.reject("Email o contraseña incorrecto")
                
            })
    })
]

module.exports = validateLogin;

/* const getAdminUser = data => User.findOne({ username: data.body.name }).then((res) => {
    if (res == null) {
     return false;
    }
    const pass = bcrypt.compareSync(data.body.password, res.password);
    if (pass) {
     return genAuthTokens(res);
    }
    return false;
   }) */