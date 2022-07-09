const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/* const { body } = require('express-validator'); */
const db = require('../database/models')
const { validationResult } = require('express-validator');

module.exports = {
	
	allCategories: (req, res) => {
        db.Categoria.findAll()
            .then(categories => {
                res.render('admin/categories/adminCategories',{
                    css: "adminIndex.css",
                    session: req.session,
                    categories,
                    titulo: "Lista de categorías"
                })
            })
            .catch((error) => res.send(error))
	},

    editCategory: (req, res) => {
        db.Categoria.findAll()
            .then((categories) => {
                db.Categoria.findByPk(req.params.id)
                    .then(categoryId => {
                        res.render('admin/categories/adminEditCategory', {
                            css: "adminIndex.css",
                            session: req.session,
                            categoryId,
                            categories,
                            titulo: "Editar categoría"
                        })
                    })
                    .catch((error) => res.send(error))
            })
            .catch((error) => res.send(error))
    },

    updateCategory: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Categoria.update({
            nombre: req.body.nombre
        },{where: 
            {id: req.params.id}
        })
            .then(() => res.redirect('/admin/categorias'))
            .catch((error) => res.send(error))
        } else {
            db.Categoria.findAll()
            .then((categories) => {
                db.Categoria.findByPk(req.params.id)
                    .then(categoryId => {
                        res.render('admin/categories/adminEditCategory', {
                            css: "adminIndex.css",
                            session: req.session,
                            categoryId,
                            categories,
                            errors: errors.mapped(),
                            titulo: "Editar categoría"
                        })
                    })
                    .catch((error) => res.send(error))
            }).catch((error) => res.send(error))

            
    }},

    createCategory: (req, res) => {
        res.render('admin/categories/adminCreateCategory', {
            css: "addProduct.css",
            titulo: "Agregar categoría",
            session: req.session
        })
    },

    uploadCategoy: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Categoria.create({
            nombre: req.body.nombre
        })
            .then(() => res.redirect('/admin/categorias'))
            .catch((error) => {res.send(error)})
        } else {res.render('admin/categories/adminCreateCategory', {
            css: "addProduct.css",
            titulo: "Agregar categoría",
            session: req.session,
            errors: errors.mapped(),
        })
    }
    },

    deleteCategory: (req, res) => {
        db.Categoria.destroy({
            where: {id: req.params.id}
        })
            .then(() => {res.redirect('/admin/categorias')})
            .catch((error) => res.send(error))
    },




	CategoryAdmin: (req, res) => {
        db.Categoria.findByPk(+req.params.id)
        .then((categoria)=>{
            db.Producto.findAll({where:{categoryid:categoria.id}})
            .then((product)=>{
                 res.render ('Admin/Categoriadmin',{
                    titulo: 'Bikesmasters',
                    css: 'adminIndex.css',
                    categoria,
                    toThousand,
                    session:req.session,
                    product
                    })
                })
                })
	        }
}