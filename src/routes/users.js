const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')

// router.get('/getregister', userController.getregister);
// router.post('/register', userController.register);
router.get('/:id/edit', userController.edit);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
module.exports = router;