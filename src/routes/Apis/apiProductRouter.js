const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/api/adminController');



router.get('/', adminController.list);
/* router.get('/:id', adminController.detalle); 
 */
router.get('/categoria', adminController.allCategories); 

module.exports = router;