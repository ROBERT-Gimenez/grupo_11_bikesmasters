const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


/* GET - Index */
router.get('/', indexController.index);
router.get('/search', indexController.search);
router.get('/Nosotros', indexController.Nosotros);


module.exports = router