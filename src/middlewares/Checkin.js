
const Checkin = (req, res, next) => {
    if(req.session.users){
       return res.redirect('/')
    }
    next()
};

module.exports = Checkin;