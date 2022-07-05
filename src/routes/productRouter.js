const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', productController.detalle); 
router.get('/categoria/:id', productController.Category); 


module.exports = router