const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [3, "First Name must be at least 3 chartacters"]

    },
    lname: {
        type: String,
        required: [true, "Last Name is required!"],
        minlength: [3, "Last Name must be at least 3 chartacters"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [8, "Password must be at least 8 chartacters"]
    }
},{timestamps: true});

module.exports.User = mongoose.model('User', UserSchema);