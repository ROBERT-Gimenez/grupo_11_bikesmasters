const express = require('express');
const router = express.Router();

/* Controladores */
const adminProductController = require('../../controllers/admin/adminProductController');
const adminUsersController = require('../../controllers/admin/adminUsersController');
const categoryController = require('../../controllers/categoryController');

/* Middlewares */
const uploadFile = require('../../middlewares/imageProductMiddleware');
const userSessionCheck = require('../../middlewares/userSessionCheck');
const adminSession = require('../../middlewares/adminSession');

/* Validaciones */
const productValidator = require('../../validations/productValidator');
const CategoriValidation = require('../../validations/CategoriValidation');

router.get('/', userSessionCheck, adminSession, adminProductController.list);

router.get('/categoria/:id', userSessionCheck, adminSession, categoryController.CategoryAdmin)


/******** Routes productos ************/

// Vista de creacion
router.get('/producto/agregar', userSessionCheck, adminSession, adminProductController.productAdd);
// Carga de producto
router.post('/producto/agregar', uploadFile.single('image'), productValidator, adminProductController.productCreate);
// Vista edición de producto
router.get('/producto/editar/:id', userSessionCheck, adminSession, adminProductController.productEdit);
// Carga actualizaciones
router.put('/producto/editar/:id', uploadFile.single('image'), productValidator, userSessionCheck, adminSession, adminProductController.productUpdate);
// Elimina producto
router.delete('/:id', adminProductController.productDelete); 


/******** Routes categorías ***********/

// Muestra todas las categorías
router.get('/categorias', userSessionCheck, adminSession, categoryController.allCategories)
// Vista edición de categoría
router.get('/categorias/editar/:id', userSessionCheck,CategoriValidation, adminSession, categoryController.editCategory)
// Guarda cambios de categoría
router.put('/categorias/:id', userSessionCheck,CategoriValidation, adminSession, categoryController.updateCategory)
// Vista de creación de una categoría
router.get('/categorias/crear', userSessionCheck, adminSession, categoryController.createCategory)
// Crea la categoría
router.post('/categorias/crear', CategoriValidation, categoryController.uploadCategoy)
// Elimina categoría
router.delete('/categorias/eliminar/:id', userSessionCheck, adminSession, categoryController.deleteCategory)


/******* Routes users **********/

// Muestra todos los usuarios
router.get('/usuarios', userSessionCheck, adminSession, adminUsersController.list)
// Detalle de usuario y edicion de usuario
router.get('/usuarios/detalle/:id', userSessionCheck, adminSession, adminUsersController.userDetail)
// Edicion de usuario
router.put('/usuarios/:id', adminUsersController.userUpdate)
// Dar de baja usuario
router.delete('/usuarios/baja/:id', adminUsersController.userDelete)

module.exports = router;