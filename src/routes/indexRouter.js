const express = require('express');
const router = express.Router();
const userconroller =require('../controllers/userController');
const indexController = require('../controllers/indexController');
const RegisterValidator = require('../validations/Registervalidation');
const LoginValidator = require('../validations/Loginvalidator');
const userSessionCheck = require('../middlewares/UsersessionCheck');
const Checkin =require('../middlewares/Checkin');
// * Llamado de middleware para imagen de perfil de usuario *"
//const imgProfile = require('../middlewares/imageProfileMiddleware')

/* GET - Index */
router.get('/', indexController.index);
router.get('/login',Checkin, indexController.login);
router.post('/login', LoginValidator, userconroller.processLogin);
router.get('/registrarse',Checkin, indexController.register);
router.post('/registrarse', RegisterValidator,userconroller.processRegister);
//router.post('/registrarse', imProfile, indexController.update); * Ruta para cargar los datos a DB
router.get('/search', indexController.search);

module.exports = router