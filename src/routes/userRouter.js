const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userSessionCheck = require('../middlewares/UsersessionCheck');

/* GEt - Carrito */
router.get('/',userSessionCheck, userController.carrito)

module.exports = router