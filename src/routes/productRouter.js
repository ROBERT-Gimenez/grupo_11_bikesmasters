const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

/* GET - Detalle del producto */
router.get('/', productController.detail)

module.exports = router