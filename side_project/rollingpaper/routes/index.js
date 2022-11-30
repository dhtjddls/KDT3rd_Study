const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/logup', controller.getLogup);
router.post('/login', controller.postLogin);
router.post('/logup', controller.postLogup);
router.get('/comment/:userid', controller.getComment);



module.exports = router;