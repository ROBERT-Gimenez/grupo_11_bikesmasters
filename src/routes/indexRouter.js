const express = require('express');
const router = express.Router();
const userconroller =require('../controllers/userController');
const indexController = require('../controllers/indexController');
const registerValidator = require('../validations/Registervalidation');
const loginValidator = require('../validations/Loginvalidator');
const userSessionCheck = require('../middlewares/UsersessionCheck');
const adminSession = require('../middlewares/adminSession');
const checkin =require('../middlewares/Checkin');
// * Llamado de middleware para imagen de perfil de usuario *"
//const imgProfile = require('../middlewares/imageProfileMiddleware')

/* GET - Index */
router.get('/', indexController.index);
router.get('/login',checkin, indexController.login);
router.post('/login', loginValidator, userconroller.processLogin);
router.get('/registrarse',checkin, indexController.register);
router.post('/registrarse', registerValidator,userconroller.processRegister);
//router.post('/registrarse', imgProfile, indexController.update); * Ruta para cargar los datos a DB
router.get('/search', indexController.search);
router.get('/logout', userconroller.logout);

/* RUTA DE PRUEBA-BRIAN!!!! Ignorar! */
router.get('/usuario', userconroller.usuario);

module.exports = router