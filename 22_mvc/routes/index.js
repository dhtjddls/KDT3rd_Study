const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain.js');


router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);


module.exports = router;