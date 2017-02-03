var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//Configure the App
app.use(express.static('/Users/joseph.hill/Documents/Projects/awesome-test3' + '/public'));

//view engine to ejs

app.set('view engine', 'ejs');

ig.use({
  // get access token here: http://instagram.pixelunion.net/
  access_token: '10007052.1677ed0.20d72e052ee044b08487541bcdc88a5c',
});


app.get('/', function(req,res){
	 ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        // render the home page and pass in the popular images

        res.render('pages/index', { grams: medias });
    });
});

app.listen(3000);
console.log("App started! Listening on 3000, so go to http://localhost:3000. Danke.");