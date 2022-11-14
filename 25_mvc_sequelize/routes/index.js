const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.get('/visitors/get/:id', controller.getVisitor);
router.post('/visitors/write', controller.postVisitor);
router.patch('/visitors/patch', controller.patchVisitor);
router.delete('/visitors/delete', controller.deleteVisitor);


module.exports = router;