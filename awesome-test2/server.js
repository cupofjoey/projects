var express = require('express');
var ejs = require('ejs');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static('/Users/joseph.hill/Documents/projects/awesome-test2' + '/public'));

app.set('view engine', 'ejs');



//Set the routes
//home page route - our profile's images
app.get('/', function(req, res){
	//use the instagram package to get our profiles media
	//render the home page and pass in our profile's images

	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
          // render the home page and pass in the popular images
          res.render('/Users/joseph.hill/Documents/projects/awesome-test2' + 'pages/index', { grams: medias });
      });
});
// 	res.render('/Users/joseph.hill/Documents/projects/awesome-test2' + 'pages/index');
// });

app.listen(8080);
//send a message
console.log('Server has started! Now listening at localhost:8080!');