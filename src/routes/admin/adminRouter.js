const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const Checkin =require('../../middlewares/Checkin');
const userSessionCheck = require('../../middlewares/UsersessionCheck');
const adminSession = require('../../middlewares/adminSession');
const productController = require('../../controllers/productController');


/* GET - Lista de productos */
router.get('/', userSessionCheck, adminSession, adminController.list);
/*GET -admision de personas */
/* router.get('/', adminSession, adminController.list) */
 /*  GET categorias */
router.get('/categoria/:id', userSessionCheck, adminSession, productController.Categoryadmin)
/* GET - Agregar producto */
router.get('/adproduct', userSessionCheck, adminSession, adminController.productAdd);
/* POST - Crea un producto en la DB */
router.post('/adproduct', uploadFile.single('image'), adminController.productCreate);
/* GET - Editar producto */
router.get('/editproduct/:id', userSessionCheck, adminSession, adminController.productEdit);
/* PUT - Actualiza producto en la DB */
router.put('/editproduct/:id', adminController.productUpdate);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', adminController.productDelete); 

module.exports = router;
