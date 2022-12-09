"use strict";

var usersRouter = require('./users');

var newRouter = require('./new');

var meRouter = require('./me');

var siteRouter = require('./site');

var courseRouter = require('./courses');

function route(app) {
  app.use('/users', usersRouter);
  app.use('/new', newRouter);
  app.use('/me', meRouter);
  app.use('/courses', courseRouter);
  app.use('/', siteRouter); // app.get('/new', (req, res) => {
  //     res.render('new');
  // })
}

module.exports = route;