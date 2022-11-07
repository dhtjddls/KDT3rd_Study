const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain.js');

router.get('/', controller.main);
router.post('/practice30', controller.practice30);




module.exports = router;