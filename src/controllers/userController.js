/* const {users, writeUsers} = require('../data/index');
 */const { validationResult } = require('express-validator');
let bcrypt =require('bcryptjs');
const db =require('../database/models');

module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            titulo: "Login",
            css: 'login.css',
            session: req.session
        })
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){

            db.Usuario.findOne({
                where:{ email: req.body.email}
            })
            .then((user)=>{
                req.session.user = {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                email: user.email,
                rol: user.rol_id
            } 
            
            if(req.body.recordar){
                const TIME_IN_MILISECONDS = 60000;
                res.cookie('Bikemastercookie', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }

            res.locals.user = req.session.user

            res.redirect('/')
        }).catch(( error )=> {console.log(error)})
        }else{
            
            res.render('users/login' , {
                titulo: "Login",
                css: 'login.css',
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

    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registrarse",
            css: 'register.css',
            session: req.session
        })
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
        
      
        if(errors.isEmpty()){
            db.Usuario.create({
                name:req.body.name,
                email: req.body.email,
                rol_id: 1,
                password: bcrypt.hashSync(req.body.password , 10),
                avatar: req.file ? req.file.filename : "user-default.png",
                telefono: req.body.telefono
            })
            .then((usuario) => { res.redirect('/usuario/login')})
            .catch((error)=> {res.send(error)})
        }else{
            //Código para mostrar errores
            res.render('users/register', {
                titulo: "Registro",
                css: 'register.css',
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }
    },

    carrito: (req, res) => {
        res.render('products/productCard', {
            titulo: "Carrito de compras",
            css: 'carrito.css',
        })
    },

    userProfile: (req, res) => {
        let userId = req.session.user.id;

        db.Usuario.findOne({where:{id: userId}})
        .then((user)=> {
            res.render('users/userProfile', {
                titulo: 'Mi perfil',
                css: 'userProfile.css',
                user,
                session: req.session
            })
        })
        .catch((error) => console.log(error))
    },

    editProfile: (req, res) => {
        let userId = req.session.user.id;
        db.Usuario.findByPk(userId)
        .then((user) => {
            res.render('users/editProfile', {
                titulo: 'Editar perfil',
                css: 'register.css',
                user,
                session: req.session
            })
        })
        .catch((error) => res.send(error))
    },

    userUpdate: (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()) {
            db.Usuario.update({
                name: req.body.name,
                telefono: req.body.telefono,
                avatar: req.file ? req.file.filename : req.session.user.avatar
            }, {
                where: {id: req.session.user.id}
            })
            .then(() => res.redirect(`/usuario/perfil/:${+req.session.user.id}`))
        }
    }
    
}