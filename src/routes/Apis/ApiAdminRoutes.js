const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/api/adminController');



router.get('/producto', adminController.list);
/* router.get('/:id', adminController.detalle); 
 */
router.get('/categoria', adminController.allCategories); 
router.get('/Usuario', adminController.Usuarios); 
router.get('/Usuario/:id', adminController.unUsuario); 

module.exports = router;