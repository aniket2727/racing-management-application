





const mongoose = require('mongoose');  // imported mongoose for database connections 
const userinfoschema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },

    name: {
        type: String,
        unique: true
    },

    password: {
        type: String
    }
});

const usermodel = mongoose.model('userInfo', userinfoschema);
module.exports = usermodel;
