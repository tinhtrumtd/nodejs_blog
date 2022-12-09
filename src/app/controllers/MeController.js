const res = require("express/lib/response");
const Course = require('../model/Course')
const User = require('../model/User')
class MeController {
    //GET /me/stored/courses
    storedCourses(req, res,next) {
        Course.find({}).lean()
        .then(courses=> res.render('me/stored-courses', {courses}))
        .catch(next);
        
    }
    storeduser(req,res,next){
        User.find({}).lean()
        .then(users=> res.render('me/stored-users', {users}))
        .catch(next);
    }

}

module.exports = new MeController;