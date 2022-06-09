const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const registerValidator = require('../validations/registerValidation');
const loginValidator = require('../validations/loginValidator');
const userSessionCheck = require('../middlewares/userSessionCheck');
const checkin = require('../middlewares/checkin');
const imgProfile = require('../middlewares/imageProfileMiddleware')



router.get('/carrito', userSessionCheck, userController.carrito);

router.get('/login', checkin, userController.login);
router.post('/login', loginValidator, userController.processLogin);
router.get('/logout', userSessionCheck, userController.logout);

router.get('/registrarse', checkin, userController.register);
router.post('/registrarse', registerValidator, userController.processRegister);

router.get('/perfil/:id', userSessionCheck, userController.userProfile);
router.get('/perfil/editar/:id', userSessionCheck, userController.editProfile);
router.put('/perfil/:id', imgProfile.single('avatar'), userController.userUpdate);


module.exports = router