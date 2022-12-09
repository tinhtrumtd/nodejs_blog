const res = require("express/lib/response");


class NewController {
    index(req, res) {
            res.render('new');
        }
        //get new:slug(biến động)
    show(req, res) {
        res.send('alo alo alo')
    }
}
module.exports = new NewController;