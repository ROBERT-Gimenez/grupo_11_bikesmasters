const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin/adminController')

router.get('/', adminController.list)
router.get('/adproduct', adminController.listproduct)

module.exports = router