const {users ,writeUsers} = require('../data/index');
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
                email: req.body.email,
                password: req.body.password,
                avatar: req.file ? req.file.filename : "user-default.png",
                rol: "USER"
            }
            users.push(newUser)
            writeUsers(users)
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

    userProfile: (req, res) => {
        let userId = +req.params.id;
        let user = users.find(user => userId === user.id)
        res.render('users/userProfile', {
            user,
            session: req.session
        })
    },

    editProfile: (req, res) => {
        let userId = +req.params.id;
        let user = users.find(user => user.id === userId)
        res.render('users/editProfile', {
            user,
            session: req.session
        })
    },

    userUpdate: (req, res) => {
        let userId = +req.params.id;
        users.forEach(user => {
            if(user.id === userId){
                user.name = req.body.name,
                user.telefono = +req.body.telefono,
                user.avatar = req.file ? req.file.filename : 'user-default.png',
                user.direction = req.body.direction
            }
        })
        writeUsers(users);
        res.redirect('/usuario/:id')
    }

}
 