"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var res = require("express/lib/response");

var User = require('../model/User');

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "edit",
    value: function edit(req, res, next) {
      User.findById(req.params.id).lean().then(function (users) {
        return res.render('users/edit', {
          users: users
        });
      })["catch"](next);
    }
  }, {
    key: "update",
    value: function update(req, res, next) {
      User.updateOne({
        _id: req.params.id
      }, req.body).then(function () {
        return res.redirect('/me/stored/user');
      })["catch"](next);
    }
  }, {
    key: "delete",
    value: function _delete(req, res, next) {
      User.deleteOne({
        _id: req.params.id
      }).then(function () {
        return res.redirect('back');
      })["catch"](next);
    }
  }]);

  return UserController;
}();

module.exports = new UserController();