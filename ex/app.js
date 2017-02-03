"use strict";

var express = require('express'),
	posts = require('./posts.json')
var pug = require('pug');

var app = express();

app.set('view engine', 'pug');
app.set('views', "./");

app.get('/', function(req, res){  //location parameter is "/"//
	res.render('index');
});

app.get('/blog/:title?', function(req, res){
	var title = req.params.title;
		if(title === undefined) {
			res.status(503);
			res.send("This page is under construction! Please visit soon though. K, bye.")
		} else {
	var post = posts[title]
	res.send(post);
	}	
})

app.listen(3000);
	console.log("listening on 3000");