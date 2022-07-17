const toThousand = n => n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models')
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

module.exports = {
    list: (req, res) => {
        db.Producto.findAll()
        .then((products) => {
        db.Categoria.findAll()
        .then((categories) => {
            res.render('admin/adminIndex', {
                titulo: "Listado de productos",
                products,
                session:req.session,
                toThousand,
                categories,
                css:'adminIndex.css'
            })   
        })
        })
        .catch((error)=>{res.send(error)})
        
    },

    productAdd: (req, res) => {
        db.Producto.findAll()
        .then(()=>{
            db.Categoria.findAll()
            .then((categories)=>{
              res.render('admin/adproduct', {
            titulo: "Agregar producto",
            categories,
            old: req.body,
            css: 'addProduct.css',
            session:req.session,  
            })
           
        })   
        }).catch((error)=> {res.send(error)})
      
    },
    
    productCreate: (req, res) => {
        /* 1 - Crear el objeto producto */
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Categoria.findOne({where:{id:req.body.categoryid}})
        .then(()=> {
            const {name , description , marca , discount , stock , price ,categoryid} = req.body;
            return db.Producto.create({
                name , description , marca , discount , stock , price, categoryid ,user_id:+req.session.user.id,
                image: req.file ? req.file.filename : "product-default-4.png",
                
            }).then(() => {
                
            res.redirect('/admin')   
            }).catch((error)=>{res.send(error)})

        })} else {
            db.Categoria.findAll()
                .then((categories) => {
                    
                    res.render('admin/adproduct', {
                        titulo: "Agregar producto",
                        categories,
                        old: req.body,
                        css: 'addProduct.css',
                        session: req.session,
                        errors: errors.mapped()  
                    })
                })
        }
    },
    
    productEdit: (req, res) => {
        
        let idProduct = +req.params.id;        
        db.Categoria.findAll()
        .then((categories) => { 
            return db.Producto.findByPk(idProduct)
                    .then((product) => {
                        res.render('admin/editproduct', {
                            product,
                            categories,
                            old: req.body,
                            css: 'addProduct.css',
                            session: req.session ,
                            titulo: "Edición " + product.name
            })
        })
       
        })
    },
    /* Recibe los datos actualizados del form de edición */
    productUpdate: (req, res) => {
        if(req.file != undefined){
            db.Producto.findByPk(+req.params.id)
                .then((Producto)=>{
                let image = Producto.image;
                try{ 
                    if(fs.existsSync(path.join(__dirname ,'../../../public/images/products/'+ image))){
                        fs.unlinkSync(path.join(__dirname ,'../../../public/images/products/'+ image))
                    }}
                    catch(err){ 
                        res.send(err)           
                    }                              
            }).catch((error)=>{ res.send(error)})
                
    }
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            db.Producto.findByPk(+req.params.id)
            .then((product)=>{
                db.Producto.update({
                    name: req.body.name,
                    price: req.body.price,
                    categoryid: req.body.categoryid,
                    description: req.body.description,
                    marca: req.body.marca,
                    discount: req.body.discount,
                    stock: req.body.stock,
                    image: req.file? req.file.filename : product.image,
            },{ where: { id: req.params.id,}
            }).then(() => {
              res.redirect('/admin')
            }).catch(error => console.log(error))
            }) 
          }else{
            let idProduct = +req.params.id;        
            db.Categoria.findAll()
            .then((categories) => { 
                return db.Producto.findByPk(idProduct)
                        .then((product) => {
                            res.render('admin/editproduct', {
                                product,
                                categories,
                                old: req.body,
                                css: 'addProduct.css',
                                session: req.session ,
                                titulo: "Edición " + product.name,
                                errors: errors.mapped()
                })
                })
                .catch((error) => res.send(error))
           
            })
            .catch((error) => res.send(error))
          }
    },
    /* Recibe la info del producto a eliminar */
    productDelete: (req, res) => {
        let ProductoId = +req.params.id;

        db.Producto.destroy({
        where: { id: ProductoId },
        }).then((result) => {
        if (result) {
        res.redirect("/admin");
        } else {
        res.send("Ups algo rompí");
        }
        })
        .catch((error) => res.send(error));
    },
    /* Recibe los datos del producto a buscar */
    productSearch: (req, res) => {

    }

}