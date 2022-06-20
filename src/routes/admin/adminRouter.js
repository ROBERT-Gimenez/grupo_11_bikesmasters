const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const userSessionCheck = require('../../middlewares/userSessionCheck');
const adminSession = require('../../middlewares/adminSession');
const productController = require('../../controllers/productController');
const userAdmin = require('../../controllers/userController');
const categoryController = require('../../controllers/categoryController');



router.get('/', userSessionCheck, adminSession, adminController.list);
/* Get admin views */
router.get('/usuarioadmin', adminController.userAdmin);

router.get('/categoria/:id', userSessionCheck, adminSession, categoryController.CategoryAdmin)

/* Routes productos */
//Vista de creacion
router.get('/producto/agregar', userSessionCheck, adminSession, adminController.productAdd);
//Carga de producto
router.post('/producto/agregar', uploadFile.single('image'), userSessionCheck, adminSession, adminController.productCreate);
//Vista edición de producto
router.get('/producto/editar/:id', userSessionCheck, adminSession, adminController.productEdit);
//Carga actualizaciones
router.put('/producto/editar/:id', uploadFile.single('image'), userSessionCheck, adminSession, adminController.productUpdate);
//Elimina producto
router.delete('/:id', adminController.productDelete); 

/* Routes categorías */
router.get('/categorias', userSessionCheck, adminSession, categoryController.allCategories)
router.get('/categoria/editar/:id', userSessionCheck, adminSession, categoryController.editCategory)
router.put('/categoria/:id', userSessionCheck, adminSession, categoryController.updateCategory)

module.exports = router;
