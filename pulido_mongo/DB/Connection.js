const mongoose = require('mongoose');

const URI = "mongodb+srv://neftali:nef@cluster0.db5a4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database connected.')
};

module.exports = connectDB;