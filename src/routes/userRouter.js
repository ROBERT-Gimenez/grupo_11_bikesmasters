const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const registerValidator = require('../validations/registerValidation');
const loginValidator = require('../validations/Loginvalidator');
const userSessionCheck = require('../middlewares/userSessionCheck');
const checkin = require('../middlewares/checkin');
const imgProfile = require('../middlewares/imageProfileMiddleware')
const userEditValidator = require('../validations/userEditValidator')
const directioValidator = require('../validations/directionValidator')
const passport = require('passport');
const googleLogin = require('../middlewares/Google');
googleLogin()

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});



router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/usuario/login' }), userController.loginGoogle);

router.get('/carrito', userSessionCheck, userController.carrito);

router.get('/login', checkin, userController.login);
router.post('/login', loginValidator, userController.processLogin);
router.get('/logout', userSessionCheck, userController.logout);

router.get('/registrarse', checkin, userController.register);
router.post('/registrarse', registerValidator, userController.processRegister);

router.get('/perfil/:id', userSessionCheck, userController.userProfile);
router.get('/perfil/editar/:id', userSessionCheck, userController.editProfile);
router.put('/perfil/:id', imgProfile.single('avatar'), userEditValidator, userController.userUpdate);

router.get('/perfil/agregar/direccion/:id', userSessionCheck,directioValidator, userController.addDirection)
router.post('/perfil/:id', userSessionCheck, userController.loadDirection)
router.get('/perfil/editar/direccion/:id', userSessionCheck,directioValidator, userController.editDirection)
router.put('/perfil/editar/:id', userSessionCheck, directioValidator,userController.updateDirection)


module.exports = router