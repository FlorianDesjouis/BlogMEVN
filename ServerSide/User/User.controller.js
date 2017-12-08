const User = require('./User.model');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const sha256 = require('sha256');

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
    },
    login: (req, res) => {
        User.findOne({
            username: req.body.username
        }, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.json({error: true, message: 'Login failed. User not found.'});
            } else if (user) {
                // check if password matches
                if (user.password !== sha256(req.body.password)) {
                    res.json({error: true, message: 'Login failed. Wrong password.'});
                } else {

                    let token = jwt.sign({
                        "username": user.username,
                        "email": user.email,
                        "password": user.password
                    }, config.secret, {
                        expiresIn: "1d" // d h etc
                    });

                    res.json({
                        message: 'Connected with success !',
                        error: false,
                        token: token
                    });
                }

            }

        });
    }
}
