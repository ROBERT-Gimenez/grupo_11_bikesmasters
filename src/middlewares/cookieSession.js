const cookieSession = (req, res, next) => {
    if(req.cookies.Bikemastercookie){
        req.session.user = req.cookies.Bikemastercookie;
        res.locals.user = req.session.user;
    }
    next()
}

module.exports = cookieSession;