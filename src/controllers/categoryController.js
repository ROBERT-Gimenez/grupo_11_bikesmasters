const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { body } = require('express-validator');
const db = require('../database/models')

module.exports = {
	
	allCategories: (req, res) => {
        db.Categoria.findAll()
            .then(categories => {
                res.render('admin/categories/adminCategories',{
                    css: "adminIndex.css",
                    session: req.session,
                    categories
                })
            })
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
                            categories
                        })
                    })
                    .catch((error) => res.send(error))
            })
            .catch((error) => res.send(error))
    },
    updateCategory: (req, res) => {
        db.Categoria.update({
            nombre: req.body.nombre
        },{where: 
            {id: req.params.id}
        })
            .then(() => res.redirect('/admin/categorias'))
            .catch((error) => res.send(error))
    },
    createCategory: (req, res) => {
        
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