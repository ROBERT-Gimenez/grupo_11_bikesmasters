const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userSessionCheck = require('../middlewares/UsersessionCheck');

/* GEt - Carrito */
router.get('/', userController.carrito)
router.get('/detalle/carrito', userController.carrito)

module.exports = router