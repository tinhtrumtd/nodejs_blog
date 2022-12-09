"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var res = require("express/lib/response");

var Course = require('../model/Course');

var User = require('../model/User');

var MeController =
/*#__PURE__*/
function () {
  function MeController() {
    _classCallCheck(this, MeController);
  }

  _createClass(MeController, [{
    key: "storedCourses",
    //GET /me/stored/courses
    value: function storedCourses(req, res, next) {
      Course.find({}).lean().then(function (courses) {
        return res.render('me/stored-courses', {
          courses: courses
        });
      })["catch"](next);
    }
  }, {
    key: "storeduser",
    value: function storeduser(req, res, next) {
      User.find({}).lean().then(function (users) {
        return res.render('me/stored-users', {
          users: users
        });
      })["catch"](next);
    }
  }]);

  return MeController;
}();

module.exports = new MeController();