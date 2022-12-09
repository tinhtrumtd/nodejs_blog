"use strict";

var express = require('express');

var router = express.Router();

var siteController = require('../app/controllers/siteController'); //router.use('/:slug', newController.show)


router.get('/', siteController.index);
module.exports = router;