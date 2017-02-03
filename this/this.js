// --------Let's talk about "this"-----------

// 4 ways that this takes a value

// -In normal function calls
// -Within methods on objects
// -Within an object that has been constructed
// -A function invoked with .call, .apply, or bind



function helloWorld(){
	console.log("Hello World");
	console.log(this);
};

helloWorld();

//this becomes the Window object
//in the browser it is the Window object


var Portland = {
	bridges: 12,
	airport: 1,
	soccerTeams: 1,
	logNumberOfBridges: function() {
		console.log("There are " + this.bridges + " bridges in Portland!")
	}

}
Portland.logNumberOfBridges();

//"this" is being used in a method on an object
//The console logs 12 bridges
//This being called in a method on an object, 
//will refer to the object itself
//this.<key> will look up the value to see if it exists
//and in this case it does

//Let's add another method

var Portland = {
	bridges: 12,
	airport: 1,
	soccerTeams: 1,
	logNumberOfBridges: function() {
		console.log("There are " + this.bridges + " bridges in Portland!")
	}, 
	logTeams: function (){
		console.log(this.soccerTeams)
	}

}
Portland.logTeams();

//The call on that function will pull up the value
//"1". Again, the this.<key> in the method, will 
//refer to the object itself, and will determine
//if it is true or not. Otherwise it will be undefined


//Let's make log:Teams into it's own anonymous function

var Portland = {
	bridges: 12,
	airport: 1,
	soccerTeams: 1,
	logNumberOfBridges: function() {
		console.log("There are " + this.bridges + " bridges in Portland!")
	} 

}

function logTeams (){
		console.log(this.soccerTeams)
	}
Portland.foo = logTeams;

Portland.foo();




//If we use "this" in a constructor function to make
// a new object, "this" will refer to an the object
// and not the constructor method
//this is the most powerful way to use "this"

var City = function(name, state){
	this.name = name || 'Portland';
	this.state = state || 'Oregon';

};

//this.name will go to the name parameter, or 
//default to 'Portland', if name is undefined, or
//falsy. The same for 'this.state'.

portland = new City ();
seattle = new City ('Seattle', 'Washington');

console.log(Portland);
console.log(Seattle);

//the this does not coorespond to the constructor
//method, instead it works with the object itself