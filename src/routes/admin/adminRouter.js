const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin/adminController')

router.get('/', adminController.list);
router.get('/adproduct', adminController.listproduct);
router.get('/editproduct', adminController.editproduct);

module.exports = router