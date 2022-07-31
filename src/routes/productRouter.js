const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/nuestros-productos', productController.allProducts)
/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', productController.detalle); 
router.get('/categoria/:id', productController.Category); 


module.exports = router