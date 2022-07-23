const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db =require('../database/models');

module.exports = {
	// Detail - Detail from one product
	detalle: (req, res) => {
/* 		let product = products.find(product => product.id === +req.params.id);
 */		
        db.Producto.findByPk(+req.params.id, {
            include: "category"
        })
        .then((product) => {
           res.render('products/productDetail',{
            titulo: "Detalle",
            css: 'productDetail.css',
            product,
            productCategory: product.category.nombre,
            toThousand,
            session:req.session
		})  
        })
        .catch((error)=> res.send(error))
       
	
	},
	Category: (req, res) => {
            db.Categoria.findByPk(+req.params.id)
            .then((categoria)=>{
                db.Producto.findAll({where:{categoryid:categoria.id}})
                .then((product)=>{
                    
                res.render ('products/Categorias',{
                    titulo: 'Bikesmasters',
                    css: 'home.css',
                    categoria ,
                    toThousand,
                    session:req.session,
                    product
    
                }) })
            })
            .catch((error)=> res.send(error))
	
	},
	Categoryadmin: (req, res) => {
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

		/*let namecategori = categorias.find(categori => categori.id === +req.params.id)
		let Categori = [];
            products.forEach(product => {
                if(product.categoryId === +req.params.id){
                    Categori.push(product)
                }
            }
            );*/
            

            })
	
	}
}