"use strict";

var express = require('express');

var router = express.Router();

var userController = require('../app/controllers/UserController'); // router.get('/getregister', userController.getregister);
// router.post('/register', userController.register);


router.get('/:id/edit', userController.edit);
router.put('/:id', userController.update);
router["delete"]('/:id', userController["delete"]);
module.exports = router;