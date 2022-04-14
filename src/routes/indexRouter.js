const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* GET - Index */
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/registrarse', indexController.register);
router.get('/search', indexController.search);

module.exports = router