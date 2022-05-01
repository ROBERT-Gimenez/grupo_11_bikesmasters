const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userSessionCheck = require('../middlewares/UsersessionCheck');
const adminSession = require('../middlewares/adminSession');

/* GEt - Carrito */
router.get('/', userController.carrito)


module.exports = router