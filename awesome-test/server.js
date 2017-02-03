//grab express
var express = require('express');

//create express app
var app = express();
var ig = require('instagram-node').instagram();


//create an express route for the home page
//http://localhost:3000/
// app.get('/', function (req, res){
// 	res.sendFile('/Users/joseph.hill/Documents/projects/awesome-test' + '/index.html');
// });
ig.use({
access_token: "10007052.1677ed0.20d72e052ee044b08487541bcdc88a5c",
});

// home page route - popular images
app.get('/', function(req, res) {
// use the instagram package to get popular media
ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
// render the home page and pass in the popular images
res.render('/Users/joseph.hill/Documents/projects/awesome-test' + 'index.html', { grams: medias });
	});
});



//start the server on port 8080
app.listen(8080);
//send a message
console.log('Server has started! Now listening at localhost:8080!');

