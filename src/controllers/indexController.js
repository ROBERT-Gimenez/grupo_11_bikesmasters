module.exports = {
    index: (req, res)=> {
        res.render('home', {
            titulo: "Homepage",
            css: 'home.css'
        })
    },
    login: (req, res) => {
        res.render('users/login', {
            titulo: "Login",
            css: 'login.css'
        })
    },
    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registrarse"
        })
    },
}