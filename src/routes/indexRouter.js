const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


<<<<<<< HEAD
/* GET - Index */
=======
>>>>>>> 6df5c23b3f5046c8833fcd9d6e0e3ac57bf2c1da
router.get('/', indexController.index);
router.get('/search', indexController.search);


module.exports = router