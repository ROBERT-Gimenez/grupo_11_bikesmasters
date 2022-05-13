const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const checkin = require('../../middlewares/checkin');
const userSessionCheck = require('../../middlewares/userSessionCheck');
const adminSession = require('../../middlewares/adminSession');
const productController = require('../../controllers/productController');
const UserAdmin = require('../../controllers/userController');


/* GET - Lista de productos */
router.get('/', userSessionCheck, adminSession, adminController.list);
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

router.get('/usuarioadmin', adminController.UserAdmin);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', adminController.productDelete); 

module.exports = router;
