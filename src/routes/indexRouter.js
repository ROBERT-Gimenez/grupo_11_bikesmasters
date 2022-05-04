const express = require('express');
const router = express.Router();
const usercontroller =require('../controllers/userController');
const indexController = require('../controllers/indexController');
const registerValidator = require('../validations/Registervalidation');
const loginValidator = require('../validations/Loginvalidator');
const userSessionCheck = require('../middlewares/UsersessionCheck');
const adminSession = require('../middlewares/adminSession');
const checkin =require('../middlewares/Checkin');
// * Llamado de middleware para imagen de perfil de usuario *"
const imgProfile = require('../middlewares/imageProfileMiddleware')

/* GET - Index */
router.get('/', indexController.index);
router.get('/login',checkin, indexController.login);
router.post('/login', loginValidator, usercontroller.processLogin);
router.get('/registrarse', checkin, indexController.register);
router.post('/registrarse', registerValidator, usercontroller.processRegister);
/* router.post('/registrarse', imgProfile, indexController.update); */
router.get('/search', indexController.search);
router.get('/logout', usercontroller.logout);

/* RUTA DE PRUEBA-BRIAN!!!! Ignorar! */
router.get('/usuario/:id', usercontroller.userProfile);
router.get('/usuario/edit/:id', usercontroller.editProfile);
router.put('/usuario/:id', imgProfile.single(), usercontroller.userUpdate);

module.exports = router