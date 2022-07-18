const db = require('../../database/models')
const fs = require('fs');
const path = require('path');
const sequelize = db.sequelize;
const { Op } = require("sequelize");    

module.exports = {
    list: (req, res) => {
        db.Producto.findAll(
            {include: ['category']}
            )
        .then((products) => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/producto'
                },
                data: products
            }
                res.status(200).json(respuesta);
        })

        
    }, 
    allCategories: (req, res) => {
        db.Categoria.findAll()
            .then((categoria) => {
                let respuesta = {meta :{
                status:200,
                total:categoria.length,
                url:'/api/producto/categoria'
                }, data:categoria }
           
                res.status(200).json(respuesta)
                })  
            },
            Usuarios : (req, res) => {
                db.Usuario.findAll()
                .then((Usuario) => {
                    let respuesta = {meta :{
                    status:200,
                    total:Usuario.length,
                    url:'/api/Usuario'
                    }, data:Usuario }
               
                    res.status(200).json(respuesta)
                    }).catch((error) => res.status(400).send(error))
                
                
            },
             unUsuario : (req, res) => {
                db.Usuario.findByPk(req.params.id)
                .then((Usuario) => {
                    if(Usuario){
                    let respuesta = {meta :{
                    status:200,
                    total:Usuario.length,
                    url:'/api/Usuario/:id'
                    }, data:Usuario }
               
                    res.status(200).json(respuesta)
                    }else{ return res.status(404).json({
                        meta: {
                            status: 404,
                            msg: "Not found",
                        },
                    });
                }
            })
            .catch((error) => res.status(400).send(error));
         }
        }