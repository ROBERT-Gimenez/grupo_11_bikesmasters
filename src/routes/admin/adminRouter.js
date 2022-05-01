const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const Checkin =require('../../middlewares/Checkin');
const userSessionCheck = require('../../middlewares/UsersessionCheck');
const adminSession = require('../../middlewares/adminSession');


/* GET - Lista de productos */
router.get('/', userSessionCheck,adminController.list);
/*GET -admision de personas */
router.get('/',adminSession,adminController.list)
/* GET - Agregar producto */
router.get('/adproduct', userSessionCheck ,adminController.productAdd);
/* POST - Crea un producto en la DB */
router.post('/adproduct', uploadFile.single('image'),adminController.productCreate);
/* GET - Editar producto */
router.get('/editproduct/:id', adminController.productEdit);
/* PUT - Actualiza producto en la DB */
router.put('/editproduct/:id', adminController.productUpdate);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', adminController.productDelete); 

module.exports = router;
