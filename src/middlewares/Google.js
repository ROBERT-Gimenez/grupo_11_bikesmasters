const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../database/models')


module.exports = () => {
    return(
passport.use(new GoogleStrategy({
    clientID:"644233699732-2t2runj9j91qjms6bub4ruahdnsqovbn.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:4000/usuario/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    db.Usuario.findOrCreate({
        where: {
            social_id: profile.id
        },
        defaults:{
            name: profile.name.givenName,
            email: profile.emails[0].value,
            password: null,
            rol_id: 1,
            social_id: profile.id,
            social_provider: 'google'
        }
    })
    .then(usuario =>{
        return done(null, usuario)
    })
    .catch(error=>{
        console.log(error)
    })
}
)
))
}


