//Problem: We need a simple way to look at a user's badge count and JavaScript points
//solution, use node.js to connect to Treehouse's API to get profile information to print out 
var http = require("http");
var username = "joehill2"
//print out messages
function printMessage(username, badgeCount, points){
	username + " has " + badgeCount + " total badge(s) and " + points + "points in JavaScript";
	console.log(message);
}
//Print out error messages
function printError(error){
	console.error(error.message);
}


function get(username){
	//Connect to api url (http://teamtreehouse.com/username.json)

	var request = http.get("http://teamtreehouse.com/username.json" + username + ".json", function(response){
		var body = " "
		//Read the Data
		response.on('data', function(chunk){
			body += chunk;
		});
		response.on('end', function(){
			if(response.statusCode === 200){
			try{
			var profile = JSON.parse(body);
			printMessage(username, profile.badges.length, profile.points.Javascript)
			} catch(error){
				//Parse error
				printError(error);
				}	
			}else{
				//status code error
				printError({message: "There was an error getting the profile for " + username + ". (" + 
			http.STATUS_CODES[response.statusCode] +")"});
			}
		});
	//Parse the Data, converting a string to an object for instance

	//Print the Data
	});
	//Connection error
	request.on("error", printError);
}

module.exports.get = get;