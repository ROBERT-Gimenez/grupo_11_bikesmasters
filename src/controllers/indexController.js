const {products} = require('../data/index')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");}


module.exports = {
    index: (req, res)=> {
        res.render('home' ,{
            css:'home.css',
            titulo: 'Bikesmasters',
			products,	
			toThousand,
            session:req.session
        }
        )
    },
    search: (req, res) => {
        let searchResult = [];
            products.forEach(product => {
                if(removeAccents(product.name.toLowerCase()).includes(req.query.keywords.toLowerCase())){
                    searchResult.push(product)
                }
            }
            );
            res.render ('products/searchResults',{
                titulo: 'Bikesmasters',
                css: 'home.css',
                resultado: searchResult ,
                keyword: req.query.keywords,
                toThousand,
                session: req.session
            })
    },
    Nosotros: (req, res)=> {
        res.render('admin/Nosotros' ,{
            css:'home.css',
            titulo: 'Bikesmasters',
			products,	
			toThousand,
            session:req.session
        }
        )
    }}