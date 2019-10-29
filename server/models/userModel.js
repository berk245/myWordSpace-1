const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        min: 4,
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    words:{
        type: Array,
    },
    logins:{
        type: Array
    }
})

module.exports = mongoose.model('User', userSchema);