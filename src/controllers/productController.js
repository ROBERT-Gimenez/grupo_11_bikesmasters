const path = require('path');
const fs = require('fs');
const {products} = require('../data/index');
const categorias = require('../data/categories')

/* let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
 
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
	
	}
}