const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
    "image": {type: String, required: true},
    "title" : {type: String, required: true},
    "content": {type: String, required: true},
    "category": {type: String, required: true, enum: ['Gaming News', 'Science/Tech', 'Web News']}
}, {collection: 'post'})


module.exports = mongoose.model('Post', postSchema)