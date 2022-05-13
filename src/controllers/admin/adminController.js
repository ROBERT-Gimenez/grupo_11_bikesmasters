const {products, writeProducts, categories} = require('../../data/index');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    list: (req, res) => {
        res.render('admin/adminIndex', {
            titulo: "Listado de productos",
            products,
            toThousand,
            categories
        })
    },
    /* Envia la vista de formulario de creación de producto */
    productAdd: (req, res) => {
        res.render('admin/adproduct', {
            titulo: "Agregar producto",
        })
    },
    /* Recibe los datos del form de creación y guarda el producto en la DB */
    productCreate: (req, res) => {
        /* 1 - Crear el objeto producto */
        let lastId = 0;
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
            condition: req.body.condition
        }
        
        // Paso 2 - Guardar el nuevo producto en el array de usuarios

        products.push(newProduct)

       // Paso 3 - Escribir el JSON de productos con el array actual

       writeProducts(products)

       // Paso 4 - Devolver respuesta (redirección)

       res.redirect('/admin')
    },
    /* Envia la vista de form de edición de producto */
    productEdit: (req, res) => {
        /* 1 - Obtener el id del producto */
        let idProduct = +req.params.id;
        /* 2 - Buscar el producto a editar */
        let product = products.find(product => product.id === idProduct)
        /* 3 - Mostrar el producto en la vista */
        res.render('admin/editproduct', {
            titulo: "Edición",
            product
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
            }
        })

        /* 3 - Guardar los cambios */
        writeProducts(products);

        /* 4 - Respuesta */
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
}