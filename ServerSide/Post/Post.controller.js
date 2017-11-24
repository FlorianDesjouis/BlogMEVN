const Post = require('./Post.model');

module.exports = {

    //Get all posts
    findAll: (req, res) => {
        Post.find({})
        .exec()
        .then(posts => {
            if(posts === null){
                return res.status(500).json({error: 1, message: "No post found"})
            }else {
                res.json(posts)
            }
        })
        .catch(err => res.status(500).json({error: 1, message: err.message}))
    },
    //Get one post
    findOne: (req, res) => {
        Post.findById(req.param.id)
        .exec()
        .then(post => {
            if(post === null){
                return res.status(500).json({error: 1, message: "No post found"})
            }else {
                res.json(post)
            }
        })
        .catch(err => res.status(500).json({error: 1, message: err.message}))
    },
    //Create a post
    create: (req, res) => {
        Post.create(req.body)
        .then(post => res.json({success:1, message: "Post created", inserted: post}))
        .catch(err => res.status(500).json({error:1, message: err.message}))
    },
    //Update a post
    update: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then(post => {
            if(post === null){
                return res.status(500).json({error:1, message: "No post found"})
            }else{
                res.send('post updated')
            }
        })
        .catch(err => res.status(500).json({error:1, message: err.message}))
    },
    //Remove a post
    remove: (req, res) => {
        Post.findByIdAndRemove(req.params.id)
            .exec()
            .then(post => {
                if(post === null){
                    return res.status(500).json({error: 1, message: "No post found"})
                }else {
                    res.send('post deleted')
                }
            })
    }
    //TODO find post by category
}