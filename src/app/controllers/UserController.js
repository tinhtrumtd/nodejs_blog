const res = require("express/lib/response");
const User = require('../model/User')
class UserController {
    edit(req, res, next){
        User.findById(req.params.id).lean()
        .then(users=> res.render('users/edit', {users}))
        .catch(next)
    }
    update(req, res, next){
        User.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/user'))
        .catch(next)
    }
    delete(req, res, next){
        User.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
    
}
module.exports = new UserController;