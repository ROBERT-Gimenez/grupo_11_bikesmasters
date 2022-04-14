module.exports = {
    carrito: (req, res) => {
        res.render('products/productCard', {
            titulo: "Carrito de compras"
        })
    }
}
 