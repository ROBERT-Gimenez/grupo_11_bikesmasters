const { validationResult } = require('express-validator');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let bcrypt =require('bcryptjs');
const db =require('../database/models');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

/* const userSession = (session.user)
                userSession.save(()=>{
                userSession.reload(()=>{
                    return userSession
                })}) */

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
        db.Producto.findAll()
        .then((products)=>{

        
        const userId = +req.params.id
        db.Usuario.findOne({ where: { id: req.session.id}})
        .then((user)=>{ 
            db.Producto.findAll()
            .then(()=>{
                res.render('products/productCard', {
                titulo: "Carrito de compras",
                css:('carrito.css','') ,
                session: req.session,
                user,
                products,
                toThousand
                

            })
    })})}).catch((error)=> {res.send(error)})
},

    userProfile: (req, res) => {
        let userId = +req.session.user.id;

        db.Usuario.findOne({where: {id:userId}})
        .then((user)=> {
            let direccionId = user.direccion_id
            return db.Direccione.findByPk(direccionId)
                .then((direccion) => 
                res.render('users/userProfile', {
                    titulo: 'Mi perfil',
                    css: 'userProfile.css',
                    user,
                    session: req.session,
                    direccion
                })
        )})
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

        let userId = +req.session.user.id
        let errors = validationResult(req)
        db.Usuario.findByPk(userId) // Se obtiene los datos del usuario por el ID
        .then((user) => {
            if(errors.isEmpty()) {  // Se valida si hay errores
                    if(req.file !== undefined) {   // Se pregunta si viene algun archivo
                        // Acá nos aseguramos de que no se borre la imagen que se agrega por defecto cuando un nuevo usuario se registra
                        if(fs.existsSync(path.join(__dirname, '../../public/images/profile/' + user.avatar))
                            && user.avatar !== "user-default.png") { // Se pregunta que el archivo que viene por req.file sea diferente
                                //Si todo está bien se borra el archivo anterior y se lo reemplaza
                                fs.unlinkSync(path.join(__dirname, '../../public/images/profile/' + user.avatar))
                                db.Usuario.update({
                                    name: req.body.name,
                                    telefono: req.body.telefono !== ""? +req.body.telefono : "",
                                    avatar: req.file.filename
                                }, {where: {id: userId}})
                                    .then(() => res.redirect(`/usuario/perfil/${userId}`))
                                    .catch((error) => res.send(error))
                            } else {
                                //Si el usuario no carga ninguna imagen y tiene la foto de perfil por defecto, no se borra. Solo actualiza
                                db.Usuario.update({
                                    name: req.body.name,
                                    telefono: req.body.telefono !== ""? +req.body.telefono : "",
                                    avatar: req.file.filename
                                }, {
                                    where: { id: userId }
                                })
                                    .then(() => res.redirect(`/usuario/perfil/${userId}`))
                                    .catch((error) => res.send(error))
                            }
                    } else {
                        // Si el usuario no sube ninguna foto, solo se actualizan los datos
                        db.Usuario.update({
                            name: req.body.name,
                            telefono: req.body.telefono !== ""? +req.body.telefono : ""
                        }, {
                            where: { id: userId }
                        })
                            .then(() => res.redirect(`/usuario/perfil/${userId}`))
                            .catch((error) => res.send(error))
                    }
                } else {
                    // Si hay errores se vuelve a renderizar la imagen con los errores encontrados
                    let userId = req.session.user.id;
                    db.Usuario.findByPk(userId)
                    .then((user) => {
                        res.render('users/editProfile', {
                            titulo: 'Editar perfil',
                            css: 'register.css',
                            user,
                            session: req.session,
                            errors: errors.mapped(),
                            old: req.body
                        })
                    })
                    .catch((error) => res.send(error))
                }
            })
            .catch((error) => res.send(error))
    },
        
    addDirection: (req, res) => {
        let userId = req.session.user.id;
        db.Usuario.findByPk(userId)
        .then((user) => {
            res.render('users/addDirection', {
                titulo: "Agregar dirección",
                css: "register.css",
                session: req.session,
                user})
        })
    },

    loadDirection: async (req, res) => {
        /* Verifico errores */
        let errors = validationResult(req)
        if(errors.isEmpty()) {
        
        /* Comienzo de funcion */
        try {
            /* Consulta a API de provincia */
            const responseProvincias = await fetch("https://apis.datos.gob.ar/georef/api/provincias")
            const dataProvincia = await responseProvincias.json()
            const provincias = await dataProvincia.provincias

            /* Consulta a API de localidades */
            const responseLocalidades = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${req.body.provincia}&campos=id,nombre&max=5000`)
            const dataLocalidades = await responseLocalidades.json()
            const localidades = dataLocalidades.localidades
            let userProvincia;
            let userLocalidad;

            for (let i = 0; i < provincias.length; i++) {
                if(provincias[i].id === req.body.provincia) {
                    userProvincia = provincias[i].nombre
                } else {
                    "no se encontro provincia"
                }
            };

            for (let i = 0; i < localidades.length; i++) {
                if(localidades[i].id === req.body.localidad) {
                    userLocalidad = localidades[i].nombre
                } else {
                    "no se encontro localidad"
                }
            };

            const newDireccion = await db.Direccione.create({
                direccion: req.body.direccion,
                altura: +req.body.altura,
                codigo_postal: +req.body.postal,
                localidad: userLocalidad,
                provincia: userProvincia,
                pais: "Argentina"
            })
            const userDireccion = await db.Usuario.update({direccion_id: newDireccion.id}, {where: {id: req.session.user.id}})
            res.redirect(`/usuario/perfil/${+req.session.user.id}`)
        } catch (error) {
            res.send(error)
        }
        } else {
            let userId = req.session.user.id;
            db.Usuario.findByPk(userId)
            .then((user) => {
                res.render('users/addDirection', {
                    titulo: "Agregar dirección",
                    css: "register.css",
                    session: req.session,
                    user,
                    errors: errors.mapped()})
            })
        }
    },

    editDirection: (req, res) => {
        let userId = req.session.user.id;

        db.Usuario.findByPk(userId)
            .then((user) => {
                let direccionId = user.direccion_id
                return db.Direccione.findByPk(direccionId)
                    .then((direccion) => {
                        res.render('users/editDirection', {
                            direccion,
                            css: 'register.css',
                            session: req.session,
                            old: req.body,
                            titulo: "Editar direccion"
                        })
                    })
            })
    },

    updateDirection: async (req, res) => {
                let errors = validationResult(req);
                if(errors.isEmpty()){
                 try {

                    /* Consulta a API de provincia */
                    const responseProvincias = await fetch("https://apis.datos.gob.ar/georef/api/provincias")
                    const dataProvincia = await responseProvincias.json()
                    const provincias = await dataProvincia.provincias

                    /* Consulta a API de localidades */
                    const responseLocalidades = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${req.body.provincia}&campos=id,nombre&max=5000`)
                    const dataLocalidades = await responseLocalidades.json()
                    const localidades = dataLocalidades.localidades
                    let userProvincia;
                    let userLocalidad;

                    for (let i = 0; i < provincias.length; i++) {
                        if (provincias[i].id === req.body.provincia) {
                            userProvincia = provincias[i].nombre
                        } else {
                            "no se encontro provincia"
                        }
                    };

                    for (let i = 0; i < localidades.length; i++) {
                        if (localidades[i].id === req.body.localidad) {
                            userLocalidad = localidades[i].nombre
                        } else {
                            "no se encontro localidad"
                        }
                    };
                    const user = await db.Usuario.findByPk(req.session.user.id)
                    const newDireccion = await db.Direccione.update({
                        direccion: req.body.direccion,
                        altura: +req.body.altura,
                        codigo_postal: +req.body.postal,
                        localidad: userLocalidad,
                        provincia: userProvincia
                    }, { where: { id: user.direccion_id } })

                    console.log(user.direccion_id);
                    res.redirect(`/usuario/perfil/${+req.session.user.id}`)
                } catch (error) {
                    res.send(error)
                }
    

      }else{
        //Código para mostrar errores
        let userId = req.session.user.id;
        db.Usuario.findByPk(userId)
            .then((user) => {
                let direccionId = user.direccion_id
                return db.Direccione.findByPk(direccionId)
                .then((direccion) => {
                res.render('users/editDirection', {
                    direccion,
                    titulo: "Editar direccion",
                    css: 'register.css',
                    errors: errors.mapped(),
                    session: req.session,
                    old: req.body
        })
    })
})
}
    }}