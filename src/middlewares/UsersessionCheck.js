const userSessionCheck = (req, res, next) => {
    if(req.session.user){
        next()
    }else{
        res.redirect('/usuario/login')
    }
}

module.exports = userSessionCheck;