const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

const userSchema =  new mongoose.Schema({
    "username" : {type: String, required: true},
    "email" : {type: String, required: true},
    "password" :{type: String, required: true}
}, {collection: 'user'})

module.exports = mongoose.model('user', userSchema)
