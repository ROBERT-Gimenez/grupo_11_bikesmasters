const {products , categories} = require('../data/index');
const categorias = require('../data/categories')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
	// Detail - Detail from one product
	detalle: (req, res) => {
		let product = products.find(product => product.id === +req.params.id);
		res.render('products/detalle',{
		product,
		toThousand,
		destacado: products,
		session:req.session
		})
	
	},
	Category: (req, res) => {
		let namecategori = categorias.find(categori => categori.id === +req.params.id)
		let Categori = [];
            products.forEach(product => {
                if(product.categoryId === +req.params.id){
                    Categori.push(product)
                }
            }
            );
            res.render ('products/Categorias',{
                titulo: 'Bikesmasters',
                css: 'home.css',
                Categori: Categori ,
                toThousand,
                session:req.session,
				namecategori

            })
	
	},
	Categoryadmin: (req, res) => {
		let namecategori = categorias.find(categori => categori.id === +req.params.id)
		let Categori = [];
            products.forEach(product => {
                if(product.categoryId === +req.params.id){
                    Categori.push(product)
                }
            }
            );
            res.render ('Admin/Categoriadmin',{
                titulo: 'Bikesmasters',
                css: 'home.css',
                Categori: Categori ,
                toThousand,
                session:req.session,
				namecategori,
				categories

            })
	
	}
}