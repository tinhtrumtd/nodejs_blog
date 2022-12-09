const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path');
const req = require('express/lib/request');
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const route = require('./routes')
const db = require('./config/db');
require('dotenv').config()
db.connect();
// const multer  = require('multer')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())

app.use(morgan('combined'));
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers:{
        sum:(a,b)=>a+b,
    }
}));
app.use(methodOverride('_method'))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//route khởi tạo
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})