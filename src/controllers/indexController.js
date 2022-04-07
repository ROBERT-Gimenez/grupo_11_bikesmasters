module.exports = {
    index: (req, res)=> {
        res.render('home', {
            titulo: "Homepage"
        })
    },
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
}