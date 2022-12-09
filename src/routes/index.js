
const usersRouter = require('./users')

const newRouter = require('./new')
const meRouter = require('./me')
const siteRouter = require('./site')
const courseRouter = require('./courses')


function route(app) {
    app.use('/users',usersRouter)
    
    app.use('/new', newRouter)
    app.use('/me', meRouter)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)
   
        // app.get('/new', (req, res) => {
        //     res.render('new');
        // })
}
module.exports = route;