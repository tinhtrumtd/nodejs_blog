const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/tinh');
        console.log('thành công');
    } catch (error) {
        console.log('thất bại');
    }
}
module.exports = { connect };