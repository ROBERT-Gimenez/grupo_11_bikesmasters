const fs = require('fs');
const path = require('path');
const {products} = require('../data/index')

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
		destacado: products
		})
	
	}
}