const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', controller.getData);

router.get('/:id', controller.getDataById);

router.post('/', controller.addData);

router.delete('/:id', controller.delData);

router.put('/:id', controller.updateData);



  module.exports = router;