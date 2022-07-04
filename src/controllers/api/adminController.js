
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
            

}