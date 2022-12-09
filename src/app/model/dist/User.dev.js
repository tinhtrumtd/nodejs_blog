"use strict";

var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
var Schema = mongoose.Schema;
var User = new Schema({
  fullname: {
    type: String,
    maxlength: 255
  },
  username: {
    type: String,
    maxlength: 600
  },
  phonenumber: {
    type: String,
    maxlength: 255
  },
  birthday: {
    type: String
  },
  password: {
    type: String,
    maxlength: 255
  },
  email: {
    type: String,
    maxlength: 255,
    require: true
  } //    slug: { type: String, slug:'name', unique: true },

}, {
  timestamps: true
});
module.exports = mongoose.model('User', User);