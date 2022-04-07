module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            titulo: "Login"
        })
    },
    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registrarse"
        })
    },
    carrito: (req, res) => {
        res.render('products/productCard', {
            titulo: "Carrito de compras"
        })
    }
}