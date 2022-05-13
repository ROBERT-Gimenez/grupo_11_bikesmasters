const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const checkin = require('../../middlewares/checkin');
const userSessionCheck = require('../../middlewares/userSessionCheck');
const adminSession = require('../../middlewares/adminSession');
const productController = require('../../controllers/productController');


router.get('/', userSessionCheck, adminSession, adminController.list);

router.get('/categoria/:id', userSessionCheck, adminSession, productController.Categoryadmin)

router.get('/producto/agregar', userSessionCheck, adminSession, adminController.productAdd);
router.post('/producto/agregar', uploadFile.single('image'), adminController.productCreate);

router.get('/producto/editar/:id', userSessionCheck, adminSession, adminController.productEdit);
router.put('/producto/editar/:id', adminController.productUpdate);

router.delete('/:id', adminController.productDelete); 

module.exports = router;
