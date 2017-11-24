const User = require('./User.model');
const crypto = require('crypto');

module.exports = {

    //Get all users
    findAll: (req, res) => {
        User.find({})
        .exec()
        .then(users => {
            if(users === null){
                return res.status(500).json({error: 1, message: "No user found"})
            }else {
                res.json(users)
            }
        })
        .catch(err => res.status(500).json({error: 1, message: err.message}))
    },
    //Get one user
    findOne: (req, res) => {
        User.findOne({username: req.body})
        .exec()
        .then(user => {
            if(user === null){
                return res.status(500).json({error: 1, message: "No user found"})
            }else {
                res.json(user)
            }
        })
        .catch(err => res.status(500).json({error: 1, message: err.message}))
    },
    //Create a user
    create: (req, res) => {
        const hash = crypto.createHash('sha256')
        hash.update(req.body.password);
        req.body.password = hash.digest('hex')
        User.create(req.body)
        .then(user => res.json({success:1, message: "User created", inserted: user}))
        .catch(err => res.status(500).json({error:1, message: err.message}))
    },
    //Update a user
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then(user => {
            if(user === null){
                return res.status(500).json({error:1, message: "No user found"})
            }else{
                res.send('user updated')
            }
        })
        .catch(err => res.status(500).json({error:1, message: err.message}))
    },
    //Remove a user
    remove: (req, res) => {
        User.findByIdAndRemove(req.params.id)
            .exec()
            .then(user => {
                if(user === null){
                    return res.status(500).json({error: 1, message: "No user found"})
                }else {
                    res.send('user deleted')
                }
            })
    }
}