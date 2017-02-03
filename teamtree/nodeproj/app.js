var router = require("./router.js");
//Problem: We need a simple way to look at a user's badg count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

//1. Create a Web Server
var http = ('http');
http.createServer(function(request, response){
	router.home(request, response);
	router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');

































