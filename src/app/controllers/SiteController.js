const res = require("express/lib/response");
const Course = require('../model/Course')
class SiteController {
    index(req, res, next) {
        let perPage = 100; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.params.page || 1;
            Course.find({})
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .lean()
                .then(courses => res.render('home', {current: page, courses})) 
                .catch(next);
        }
    show(req, res) {
        res.send('alo alo alo')
    }
}
module.exports = new SiteController;