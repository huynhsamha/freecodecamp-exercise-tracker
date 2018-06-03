const mongoose = require('mongoose');
const shortid = require('shortid');

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    username: {
        type: String,
        unique: true,
        required: true
    }
})

mongoose.model('User', UserSchema);