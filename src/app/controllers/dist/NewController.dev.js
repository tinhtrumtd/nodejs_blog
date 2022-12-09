"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var res = require("express/lib/response");

var NewController =
/*#__PURE__*/
function () {
  function NewController() {
    _classCallCheck(this, NewController);
  }

  _createClass(NewController, [{
    key: "index",
    value: function index(req, res) {
      res.render('new');
    } //get new:slug(biến động)

  }, {
    key: "show",
    value: function show(req, res) {
      res.send('alo alo alo');
    }
  }]);

  return NewController;
}();

module.exports = new NewController();