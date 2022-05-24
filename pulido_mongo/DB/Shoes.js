const mongoose = require('mongoose');

const shoes = new mongoose.Schema({
    marca: {
        type: String
    },
    modelo: {
        type: String
    },
    talla: {
        type: Number
    }
});

module.exports = mongoose.model('shoes', shoes);