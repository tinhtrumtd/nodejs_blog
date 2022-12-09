const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/siteController')

//router.use('/:slug', newController.show)
router.get('/', siteController.index)

module.exports = router;