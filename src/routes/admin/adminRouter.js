const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const checkin = require('../../middlewares/checkin');
const userSessionCheck = require('../../middlewares/userSessionCheck');
const adminSession = require('../../middlewares/adminSession');
const productController = require('../../controllers/productController');
const userAdmin = require('../../controllers/userController');
const categoryController = require('../../controllers/categoryController');



router.get('/', userSessionCheck, adminSession, adminController.list);

router.get('/usuarioadmin', adminController.userAdmin);

router.get('/categoria/:id', userSessionCheck, adminSession, categoryController.CategoryAdmin)

router.get('/producto/agregar', userSessionCheck, adminSession, adminController.productAdd);
router.post('/producto/agregar', uploadFile.single('image'), userSessionCheck, adminSession, adminController.productCreate);

router.get('/producto/editar/:id', userSessionCheck, adminSession, adminController.productEdit);
router.put('/producto/editar/:id', uploadFile.single('image'), userSessionCheck, adminSession, adminController.productUpdate);

router.delete('/:id', adminController.productDelete); 

module.exports = router;
