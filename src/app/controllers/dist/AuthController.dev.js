"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("express/lib/response"),
    redirect = _require.redirect;

var _require2 = require('express-validator'),
    body = _require2.body,
    validationResult = _require2.validationResult;

var cookieParser = require('cookie-parser');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var res = require("express/lib/response");

var User = require('../model/User');

var _require3 = require("node-sass"),
    FALSE = _require3.FALSE,
    TRUE = _require3.TRUE;

var AuthController =
/*#__PURE__*/
function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }

  _createClass(AuthController, [{
    key: "getregister",
    // GET auths/register
    value: function getregister(req, res, next) {
      res.render('auths/register');
    } // POST auth/store

  }, {
    key: "register",
    value: function register(req, res, next) {
      var _req$body = req.body,
          username = _req$body.username,
          password = _req$body.password,
          fullname = _req$body.fullname,
          phonenumber = _req$body.phonenumber,
          email = _req$body.email,
          birthday = _req$body.birthday;
      var validationErrors = validationResult(req);
      var errors = validationErrors.array();

      if (validationErrors.isEmpty()) {
        User.findOne({
          username: username
        }, function (err, docs) {
          if (err) {
            next(err);
          } else {
            if (docs) {
              errors.push({
                'msg': "Tên Đăng Nhập Này Đã Tồn Tại"
              });
              return res.render('auths/register', {
                errorMessage: errors
              });
            } else {
              bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                  // Store hash in your password DB.
                  new User({
                    username: username,
                    password: hash,
                    fullname: fullname,
                    phonenumber: phonenumber,
                    email: email,
                    birthday: birthday
                  }).save(function (err, user) {
                    // if(err) throw Error();
                    if (err) {
                      console.log(err);
                      next(err);
                    } else {
                      res.redirect('/');
                    }
                  });
                });
              });
            }
          }
        });
      } else {
        return res.render('auths/register', {
          errorMessage: errors
        });
      }
    }
  }, {
    key: "getlogin",
    value: function getlogin(req, res, next) {
      res.render('auths/login');
    }
  }, {
    key: "login",
    value: function login(req, res, next) {
      var _req$body2 = req.body,
          username = _req$body2.username,
          password = _req$body2.password;
      var validationErrors = validationResult(req);
      var errors = validationErrors.array();

      if (validationErrors.isEmpty()) {
        User.findOne({
          username: username
        }, function (err, docs) {
          if (err) {
            next(err);
          } else {
            if (!docs) {
              errors.push({
                'msg': "Tài khoản không tồn tại"
              });
              return res.render('auths/login', {
                errorMessage: errors
              });
            } else {
              bcrypt.compare(password, docs.password, function (err, isMacth) {
                if (err) throw Error();

                if (isMacth == false) {
                  errors.push({
                    'msg': "Mật khẩu không đúng"
                  });
                  return res.render('auths/login', {
                    errorMessage: errors
                  });
                } else {
                  var onehour = 60 * 60;
                  jwt.sign({
                    id: docs._id
                  }, process.env.JWT_KEY, {
                    expiresIn: onehour
                  }, function (err, token) {
                    res.cookie('jwt', token, {
                      maxAge: onehour * 24,
                      httpOnly: false,
                      secure: false
                    });
                    res.redirect('/');
                  });
                }
              });
            }
          }
        });
      } else {
        return res.render('auths/login', {
          errorMessage: errors
        });
      }
    }
  }]);

  return AuthController;
}();

module.exports = new AuthController();