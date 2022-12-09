// const express = require('express')
// const router = express.Router()
// const authController = require('../app/controllers/AuthController')
// const { body, validationResult } = require('express-validator');
// router.get('/getregister',authController.getregister);
// router.post('/register',
// [
//     body('username').exists().isLength({min:3}).withMessage('Độ Dài Tối Thiểu là 3'),
//     body('email').exists().isEmail().withMessage('Email Không Đúng định Dạng'),
//     body('password').exists().isLength({min:3}).withMessage('Độ Dài Tối Thiểu là 3')
//     ],
//  authController.register);
// router.get('/getlogin', authController.getlogin);
// router.post('/login',
// [
//     body('username').exists().isLength({min:3}).withMessage('Độ Dài Tối Thiểu là 3'),
//     body('password').exists().isLength({min:3}).withMessage('Độ Dài Tối Thiểu là 3')
//     ],
// authController.login);
// module.exports = router;
"use strict";