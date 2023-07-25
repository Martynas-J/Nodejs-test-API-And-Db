const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', controller.getData);

router.get('/:id', controller.getDataById);

router.post('/', controller.addData);



  module.exports = router;