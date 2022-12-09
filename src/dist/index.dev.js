"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var path = require('path');

var req = require('express/lib/request');

var morgan = require('morgan');

var methodOverride = require('method-override');

var handlebars = require('express-handlebars');

var route = require('./routes');

var db = require('./config/db');

require('dotenv').config();

db.connect(); // const multer  = require('multer')

var app = express();
var port = 3000;
app.use(express["static"](path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: false
})); // parse application/json

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: function sum(a, b) {
      return a + b;
    }
  }
}));
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); //route khởi tạo

route(app);
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});