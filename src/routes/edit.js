const express = require('express');
const router = express.Router();
const controller = require('../controllers/editController');

router.get('/', controller.home);

module.exports = router;