const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db =require('../database/models');

module.exports = {
	
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
	
	}
}