const adminSession = (req, res, next) => {
    if(req.session.user.rol == 2 ){
        next()
    }else{
        res.redirect('/')
    }
}

module.exports = adminSession;

