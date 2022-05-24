const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

module.exports = mongoose.model('user', user);