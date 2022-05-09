const express = require('express');
const router = express.Router();
const usercontroller =require('../controllers/userController');
const indexController = require('../controllers/indexController');
const registerValidator = require('../validations/Registervalidation');
const loginValidator = require('../validations/Loginvalidator');
const userSessionCheck = require('../middlewares/userSessionCheck');
const checkin =require('../middlewares/checkin');
const imgProfile = require('../middlewares/imageProfileMiddleware')

/* GET - Index */
router.get('/', indexController.index);
/* GET - Login usuario */
router.get('/login',checkin, indexController.login);
/* POST - Levanta sesion */
router.post('/login', loginValidator, usercontroller.processLogin);
/* GET - Registro de usuario */
router.get('/registrarse', checkin, indexController.register);
/* POST - Registra usuario */
router.post('/registrarse', registerValidator, usercontroller.processRegister);
router.get('/search', indexController.search);
router.get('/logout', userSessionCheck, usercontroller.logout);
router.get('/usuario/:id', userSessionCheck, usercontroller.userProfile);
router.get('/usuario/edit/:id', userSessionCheck, usercontroller.editProfile);
router.put('/usuario/:id', imgProfile.single('avatar'), usercontroller.userUpdate);

module.exports = router