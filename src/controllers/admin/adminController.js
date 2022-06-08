/* const {products, users, writeProducts, writeUsers, categories} = require('../../data/index');*/
const toThousand = n => n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models')
const { validationResult } = require('express-validator');
module.exports = {
    list: (req, res) => {
        db.Producto.findAll()
        .then((products) => {
        db.Categoria.findAll()
        .then((categories)=>{
            
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
            
        db.Producto.create({...req.body,
             }
            ).then(()=>{
             res.redirect('/admin')   
            }).catch((error)=>{res.send(error)})
            
        }
        /* let lastId = 0;
        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id;
            }
        });

        let newProduct = {
            id: lastId + 1,
            image: req.file ? req.file.filename : "product-default-4.png",
            name: req.body.name,
            price: +req.body.price,
            marca: req.body.marca,
            description: req.body.description,
            stock: +req.body.stock,
            discount: +req.body.discount,
            categoryId: +req.body.categoryId,
            condition: req.body.condition,
        }
        
        products.push(newProduct)
        writeProducts(products) */
     
    },
    
    productEdit: (req, res) => {
        
        let idProduct = +req.params.id;        
        let product = products.find(product => product.id === idProduct)

        res.render('admin/editproduct', {
            product,
            categories,
            old: req.body,
            css: 'addProduct.css',
            session:req.session
        })
    },
    /* Recibe los datos actualizados del form de edición */
    productUpdate: (req, res) => {
        /* 1 - Obtener el id del producto */
        let idProduct = +req.params.id;
        /* 2 - Buscar el producto a editar y modificar el producto */
        products.forEach(product => {
            if(product.id === idProduct){
                product.name = req.body.name
                product.price = +req.body.price
                product.discount = +req.body.discount
                product.categoryId = +req.body.categoryId
                product.projectId = +req.body.projectId
                product.stock = +req.body.stock
                product.description = req.body.description
                product.marca = req.body.marca
                product.image = req.file? req.file.filename : product.image 
            }
        })

        writeProducts(products);
        res.redirect('/admin')

    },
    /* Recibe la info del producto a eliminar */
    productDelete: (req, res) => {
        /* 1 - Obtener el id del producto a eliminar */
        let idProducto = +req.params.id;
        /* 2 - Buscar el producto dentro del array y eliminarlo */
        products.forEach(product => {
            if(product.id === idProducto){
                //Obtener la ubicación (índice) del producto a eliminar
                let productToDeleteIndex = products.indexOf(product);
                //Elimino el producto del array
                products.splice(productToDeleteIndex, 1)
            }
        })
        /* 3 - Sobreescribir el json */
        writeProducts(products);
        /* 4 - Enviar respuesta  */
        res.redirect('/admin')
    },
    /* Recibe los datos del producto a buscar */
    productSearch: (req, res) => {

    },
    userAdmin:(req , res , next) =>{
        if(req.session.user){
            let user = users.find(user => user.id === +req.params.id);
            let adminuser = req.session.user.rol = 'ADMIN';
            writeUsers(users);
    
                res.render('admin/adminIndex', {
                    products,
                    user,
                    toThousand,
                    categories,
                    session: req.session,
                    adminuser,
                    css:'adminIndex.css'
       
    })}}

}