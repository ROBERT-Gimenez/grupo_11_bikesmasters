const path =require('path');
const fs =require('fs');
const {users ,writeUsers}=require('../data/index');
/* let userFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); */
/* const writeUsers = (data) =>  fs.writeFileSync(userFilePath, JSON.stringify(data), 'utf-8'); */
const { validationResult } = require('express-validator');


module.exports = {
    carrito: (req, res) => {
        res.render('products/productCard', {
            titulo: "Carrito de compras"
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            //Levantar sesión
            let user = users.find(user => user.email === req.body.email);

            req.session.user = {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                email: user.email,
                rol: user.rol
            }

            if(req.body.remember){
                const TIME_IN_MILISECONDS = 60000;
                res.cookie('Bikemastercookie', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }

            res.locals.user = req.session.user

            res.redirect('/')
        }else{
            
            res.render('users/login', {
                titulo: "Login",
                css: "userForms.css",
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
        
      
        if(errors.isEmpty()){
            let lastId = 0;
            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });
            let newUser = {
                id: lastId + 1,
                name: req.body.name,
                apellido:req.body.apellido,
                num:req.body.num,
                email: req.body.email,
                password: req.body.password,
                avatar: req.file ? req.file.filename : "default-image.png",
                rol: "USER"
            }
            //Guardar el nuevo usuario en el array de usuarios
            users.push(newUser)
            //Escribir el JSON de usuarios con el array actual
            writeUsers(users)
            //Devolver respuesta (redirección)
            res.redirect('/login')
        }else{
            //Código para mostrar errores
            res.render('users/register', {
                titulo: "Registro",
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();

        if(req.cookies.Bikemastercookie){
            res.cookie('Bikemastercookie', "", { maxAge: -1 })
        }

        res.redirect('/')
    },

    usuario: (req, res) => {
        res.render('users/userProfile', {
            session: req.session
        })
    }

}
 