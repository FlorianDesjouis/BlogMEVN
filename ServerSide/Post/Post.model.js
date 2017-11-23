const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
    "Image": {type: String, required: true},
    "Name" : {type: String, required: true},
    "Content": {type: String, required: true},
    "Category": {type: String, required: true, enum: ['Gaming News', 'Science/Tech', 'Web News']}
}, {collection: 'post'})


module.exports = mongoose.model('Post', postSchema)