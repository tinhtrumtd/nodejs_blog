"use strict";

var express = require('express');

var router = express.Router();

var courseController = require('../app/controllers/CourseController'); // const multer  = require('multer')
// const upload = multer({ dest: '/uploads'})


router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router["delete"]('/:id', courseController["delete"]);
router.get('/:slug', courseController.show);
module.exports = router;