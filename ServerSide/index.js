const express = require('express');
require('colors');
const mongoose = require('mongoose');
const util = require('util');
const bodyParser = require('body-parser');

//Create app
const app = express();
const post = require('./Post/Post.controller');
const user = require('./User/User.controller')
const User = require('./User/User.model');


//Config
app.set('ip', 'localhost');
app.set('port', 1337);

//Server
const Listen = (app, port, ip) => {
    return new Promise((resolve, reject) => {
        app.listen(port, ip, resolve)
    })
}	

app.use('/', bodyParser.json());
app.use('/', (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	next();
});

//Routes
app.get('/posts', post.findAll);
app.get('/post:id', post.findOne);
app.post('/post', post.create);
app.put('/post/:id', post.update);
app.delete('/post/:id', post.remove);

app.get('/users', user.findAll);
app.get('/user:id', user.findOne);
app.post('/user', user.create);
app.put('/user/:id', user.update);
app.delete('/user/:id', user.remove);

//Set mongoose
mongoose.Promise = global.Promise;

mongoose
	.connect('mongodb://localhost:27017/worldOfNews', {useMongoClient:true})
	.then(() => Listen(app, app.get('port'), () => console.log('App started'.rainbow))
	.catch( err => console.log(err.message.red))
	)



