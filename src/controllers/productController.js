/* module.exports = {
    detail: (req, res) => {
        res.render('products/detalle')
    }
} */
const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const writeProducts = (data) =>  fs.writeFileSync(productsFilePath, JSON.stringify(data), 'utf-8');


const controller = {
	// Detail - Detail from one product
	detalle: (req, res) => {
		let product = products.find(product => product.id === +req.params.id);
		res.render('detalle',{
		product,
		toThousand
		})
	
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('')
		
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let lastid = 0;
		products.forEach(product => {
			if(product.id > lastid){
				lastid = product.id
			}
			
		});
		let newproduct = {
			...req.body ,/* ...req.body - cambia todos los elemtos del cuerpo =name,price,category */
			id:lastid+1,//despues de la coma si queremos podemos modificar manualmente cada elemento
		    image:"default-image.png"
		}

		products.push(newproduct);
		writeProducts(products);
		 res.send(`El producto ${req.body.name} a sido creado exitosamente`)
		
	
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productId =+req.params.id;
		let product =products.find(product => product.id === productId);

		res.render('', {
			product
		})
	},
	// Update - Method to update
	update: (req, res) => {
		let productId =+req.params.id;
		products = products.map(
			product => 
			product.id === productId ?
			{id: product.id, ...req.body, image: product.image} : 
			product
			)
		writeProducts(products);
		
res.send(`modificaste ${req.body.name} exitosamente`)

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productId =+req.params.id;
		let productDelet ;

		products.forEach(product =>{
			if(product.id === productId){
				productDelet = product.name;
				let productDeleteIndex = products.indexOf(product);
				products.splice(productDeleteIndex , 1);
			}

		})
		writeProducts(products)
		res.send(`Eliminaste el producto ${productDelet}`)
	},

};

module.exports = controller;