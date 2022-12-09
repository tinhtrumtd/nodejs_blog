"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var res = require("express/lib/response");

var Course = require('../model/Course');

var SiteController =
/*#__PURE__*/
function () {
  function SiteController() {
    _classCallCheck(this, SiteController);
  }

  _createClass(SiteController, [{
    key: "index",
    value: function index(req, res, next) {
      var perPage = 100; // số lượng sản phẩm xuất hiện trên 1 page

      var page = req.params.page || 1;
      Course.find({}).skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage).lean().then(function (courses) {
        return res.render('home', {
          current: page,
          courses: courses
        });
      })["catch"](next);
    }
  }, {
    key: "show",
    value: function show(req, res) {
      res.send('alo alo alo');
    }
  }]);

  return SiteController;
}();

module.exports = new SiteController();