const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/getLogup', controller.getLogup);
router.post('/postLogin', controller.getLogin);


module.exports = router;