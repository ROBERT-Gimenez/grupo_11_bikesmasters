const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/* GEt - Carrito */
router.get('/', userController.carrito)

module.exports = router