const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productController.detalle); 


/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productController.create); 
router.post('/', productController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productController.edit);
/* router.post('/productos', uploadFile.single('image'),productsController.update); */
router.put('/:id', productController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productController.destroy); 

module.exports = router