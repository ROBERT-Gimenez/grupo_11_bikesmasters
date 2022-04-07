const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/* GET - Login - Registro */
router.get('/login', userController.login)
router.get('/registrarse', userController.register)
/* GEt - Carrito */
router.get('/carrito', userController.carrito)

module.exports = router