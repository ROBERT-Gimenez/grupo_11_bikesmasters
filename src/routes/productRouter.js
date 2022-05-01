const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const userSessionCheck = require('../middlewares/UsersessionCheck');
const adminSession = require('../middlewares/adminSession');

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productController.detalle); 
router.get('/categori/:id', productController.Category); 



/* /*** CREATE ONE PRODUCT ***/ 
//router.get('/create', productController.create); 
//router.post('/', productController.store); 

/*** EDIT ONE PRODUCT ***/ 
//router.get('/edit/:id/', productController.edit);
/* router.post('/productos', uploadFile.single('image'),productsController.update); */
//router.put('/:id', productController.update); 


/*** DELETE ONE PRODUCT***/ 
//router.delete('/:id', productController.destroy);

module.exports = router