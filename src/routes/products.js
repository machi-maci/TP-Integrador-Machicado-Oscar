const express = require('express');
const controller = require('../controllers/productsController');
const router = express.Router();


router.get('/', controller.home);
router.get('/detail', controller.detail); /// se conecta con linea 7 productsController.js

module.exports = router;