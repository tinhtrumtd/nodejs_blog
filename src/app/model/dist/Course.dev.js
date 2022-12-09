"use strict";

var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
var Schema = mongoose.Schema;
var Course = new Schema({
  name: {
    type: String,
    maxlength: 255,
    unique: true
  },
  description: {
    type: String,
    maxlength: 600
  },
  image: {
    type: String,
    maxlength: 255
  },
  videoid: {
    type: String,
    required: true
  },
  level: {
    type: String,
    maxlength: 255
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Course', Course);