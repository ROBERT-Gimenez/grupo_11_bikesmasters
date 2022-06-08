/* const {products , categories} = require('../data/index');*/
/*const categorias = require('../data/categories')*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db =require('../database/models');

module.exports = {
	// Detail - Detail from one product
	detalle: (req, res) => {
/* 		let product = products.find(product => product.id === +req.params.id);
 */		
        db.Producto.findByPk(+req.params.id)
        .then((product) => {
           res.render('products/productDetail',{
            titulo: "Detalle",
            css: 'productDetail.css',
            product,
            toThousand,
            session:req.session
		})  
        })
        .catch((error)=> res.send(error))
       
	
	},
	Category: (req, res) => {
		/*let namecategori = categorias.find(categori => categori.id === +req.params.id)
		let Categori = [];
            products.forEach(product => {
                if(product.categoryId === +req.params.id){
                    Categori.push(product)
                }
            }
            );*/
            db.categoria.findByPk(+req.params.id)
            .then((categorias)=>{
                res.render ('products/Categorias',{
                    titulo: 'Bikesmasters',
                    css: 'home.css',
                    Categori: Categori ,
                    toThousand,
                    session:req.session,
                    categorias
    
                })
            })
            .catch((error)=> res.send(error))
	
	},
	Categoryadmin: (req, res) => {
        db.categoria.create({
            nombre: req.body.nombre
        }).then((result)=>{
            res.redirect("productController.Categoryadmin")
        })

		/*let namecategori = categorias.find(categori => categori.id === +req.params.id)
		let Categori = [];
            products.forEach(product => {
                if(product.categoryId === +req.params.id){
                    Categori.push(product)
                }
            }
            );*/
            res.render ('Admin/Categoriadmin',{
                titulo: 'Bikesmasters',
                css: 'adminIndex.css',
                Categori: Categori ,
                toThousand,
                session:req.session,
				namecategori,
				categories

            })
	
	}
}