const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
// * Llamado de middleware para imagen de perfil de usuario *"
//const imgProfile = require('../middlewares/imageProfileMiddleware')

/* GET - Index */
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/registrarse', indexController.register);
//router.post('/registrarse', imProfile, indexController.update); * Ruta para cargar los datos a DB
router.get('/search', indexController.search);

module.exports = router