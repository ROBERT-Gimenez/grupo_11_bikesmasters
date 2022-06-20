const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/adminController');
const uploadFile = require('../../middlewares/imageProductMiddleware');
const userSessionCheck = require('../../middlewares/userSessionCheck');
const adminSession = require('../../middlewares/adminSession');
const userAdmin = require('../../controllers/userController');
const categoryController = require('../../controllers/categoryController');



router.get('/', userSessionCheck, adminSession, adminController.list);
/* Get admin views */
router.get('/usuarioadmin', adminController.userAdmin);

router.get('/categoria/:id', userSessionCheck, adminSession, categoryController.CategoryAdmin)

/* Routes productos */
// Vista de creacion
router.get('/producto/agregar', userSessionCheck, adminSession, adminController.productAdd);
// Carga de producto
router.post('/producto/agregar', uploadFile.single('image'), userSessionCheck, adminSession, adminController.productCreate);
// Vista edición de producto
router.get('/producto/editar/:id', userSessionCheck, adminSession, adminController.productEdit);
// Carga actualizaciones
router.put('/producto/editar/:id', uploadFile.single('image'), userSessionCheck, adminSession, adminController.productUpdate);
// Elimina producto
router.delete('/:id', adminController.productDelete); 

/* Routes categorías */
// Muestra todas las categorías
router.get('/categorias', userSessionCheck, adminSession, categoryController.allCategories)
// Vista edición de categoría
router.get('/categorias/editar/:id', userSessionCheck, adminSession, categoryController.editCategory)
// Guarda cambios de categoría
router.put('/categorias/:id', userSessionCheck, adminSession, categoryController.updateCategory)
// Vista de creación de una categoría
router.get('/categorias/crear', userSessionCheck, adminSession, categoryController.createCategory)
// Crea la categoría
router.post('/categorias/crear', userSessionCheck, adminSession, categoryController.uploadCategoy)
// Elimina categoría
router.delete('/categorias/eliminar/:id', userSessionCheck, adminSession, categoryController.deleteCategory)




module.exports = router;