"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var res = require("express/lib/response");

var Course = require('../model/Course');

var CourseController =
/*#__PURE__*/
function () {
  function CourseController() {
    _classCallCheck(this, CourseController);
  }

  _createClass(CourseController, [{
    key: "show",
    value: function show(req, res, next) {
      Course.findOne({
        slug: req.params.slug
      }).lean().then(function (courses) {
        res.render('courses/show', {
          courses: courses
        });
      })["catch"](next);
    }
  }, {
    key: "create",
    value: function create(req, res, next) {
      res.render('courses/create');
    }
  }, {
    key: "store",
    value: function store(req, res, next) {
      req.body.image = "https://img.youtube.com/vi/".concat(req.body.videoid, "/sddefault.jpg");
      var course = new Course(req.body);
      course.save().then(function () {
        return res.redirect('/');
      })["catch"](function (error) {});
    }
  }, {
    key: "edit",
    value: function edit(req, res, next) {
      Course.findById(req.params.id).lean().then(function (courses) {
        return res.render('courses/edit', {
          courses: courses
        });
      })["catch"](next);
    }
  }, {
    key: "update",
    value: function update(req, res, next) {
      Course.updateOne({
        _id: req.params.id
      }, req.body).then(function () {
        return res.redirect('/me/stored/courses');
      })["catch"](next);
    }
  }, {
    key: "delete",
    value: function _delete(req, res, next) {
      Course.deleteOne({
        _id: req.params.id
      }).then(function () {
        return res.redirect('back');
      })["catch"](next);
    }
  }]);

  return CourseController;
}();

module.exports = new CourseController();