var profile = require("./profile.js");
	console.dir(process.argv);
var users = ["joehill2", "chalkers", "joykesten2"];

users.forEach(profile.get);

// or 

var profile = require("./profile")
var users = process.argv.slice(2);
	users.forEach(profile.get);
