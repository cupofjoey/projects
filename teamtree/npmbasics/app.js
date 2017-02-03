var unsecurePlainTextPassword = "password";

var bcrypt = require('bcrypt');
var colors = require('colors');
bcrypt.genSalt(10, function(err, salt){
	bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash){
		//Store has in your password DB
		console.log(hash.green);
	});
});

//to find outdated packages, use "npm outdated"
//to update use "npm update"
//"~" is used to update to the most recent patch version
//"^" is used in front of the version to exclude certain builds, only for minor builds
//to unistall use "npm unistall <package>"
//to remove development package use "npm unistall <package> --save-dev"
//to remove global package use "npm unistall <package> -g"