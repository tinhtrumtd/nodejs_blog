const res = require("express/lib/response");
const Course = require('../model/Course')
class CourseController {
    
    show(req, res, next) {
        Course.findOne({slug: req.params.slug}).lean()
        .then( courses =>{
            res.render('courses/show',{courses})
        }  
        )
        .catch(next);
    }
    create(req, res, next){
        res.render('courses/create')
    }
    store(req, res, next){
        req.body.image= `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg` 
        const course = new Course(req.body)
        course.save()
        .then(()=> res.redirect('/'))
        .catch(error =>{
        })  
    }
    edit(req, res, next){
        Course.findById(req.params.id).lean()
        .then(courses=> res.render('courses/edit', {courses}))
        .catch(next)
    }
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/courses'))
        .catch(next)
    }
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
    
}
module.exports = new CourseController;