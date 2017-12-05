const express = require('express');
require('colors');
const mongoose = require('mongoose');
const util = require('util');
const bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

//Create app
const app = express();
const post = require('./Post/Post.controller');
const user = require('./User/User.controller');
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


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.set('view engine', 'html');
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
app.post('/login', function(req, res){
	user.login(req, res);
});

app.get('/logout', function(req, res){
	user.logout(req, res);
});

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



