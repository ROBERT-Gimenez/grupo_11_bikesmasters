const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db =require('../database/models');

module.exports = {
    allProducts: async (req, res) => {
        try {
            let productos = await db.Producto.findAll()
            res.render('products/allProducts', {
                productos,
                css: "home.css",
                session: req.session,
                titulo: "Nuestro productos",
                toThousand
            })
        } catch (error) {
            res.send(error)
        }
    },
	// Detail - Detail from one product
	detalle: (req, res) => {
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

            })
	
	},
    compra:(req,res) =>{
            db.Producto.findAll({where:{name:req.body.prod}})
            .then(productos =>{
              
                 productos.forEach(item => {
                    db.Carrito.create({
                        product_id:item.id,
                        usuario_id:req.session.user.id
                    }).then((producto)=>{
                        return producto
                    }).catch(erro=>{res.send(erro)})
                }); 
                res.redirect('/')
            }).catch(error =>{ res.send(error)})
        
  
             /*  db.Carrito.bulkCreate(products ,{ignoreDuplicates:true})
              .then(() => res.redirect('/'))
              .catch(error => console.log(error))
           
 */
         
},
}