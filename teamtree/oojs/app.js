//Objects provide functionality through methods. Methods may or may not return values. 
//Objects provide data storage in properties.
//The name of the property is a key.
//The contents of a property is known as a value
//Types of Objects
	//Native Objects
		//number
		//boolean
	//Host Objects
		//Run in host environment
		//document
		//console
		//Element
	//Your Own Objects
		//Anything you like
		//tasks in a todo list
		//music to listen to
//State of an object
	//State of an object is stored in its properties
	//Action of an object is stored in its' methods
//It's great for organizing your code, this is called encapsulation

//Object literal holds information

var person = {
	name: "Lauren",
	student: true
}


//Dice Roll

function diceRoll() {
  var sides = 6;
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  console.log(randomNumber);
}

var dice = {

}

// this can become somthing different with encapsulation and making the function a method (a function in an object)



var dice = {
	roll: unction diceRoll() {
  var sides = 6;
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  console.log(randomNumber);
	}

}

//next iteration

var dice = {
	sides: 6, //you can let the number be whatever you want
	roll: unction diceRoll() {
  
  var randomNumber = Math.floor(Math.random() * this.sides) + 1; //we can use this, or, the owner of the function
  return randomNumber;
	}

}

// --------or------------

var dice10 = {
	sides: 10, //you can let the number be whatever you want
	roll: unction diceRoll() {
  
  var randomNumber = Math.floor(Math.random() * this.sides) + 1; //we can use this, or, the owner of the function
  console.log(randomNumber);
	}

}


// -----------Calculator.js--------------------

var calculator = {
	sum: 0,
	add: function(value){
		this.sum = this.sum + value;
	},
	clear: function(){
		this.sum = 0;
	},
	equals: function() {
		return(this.sum);
	}
}


// -----------Constructor Function--------------------

//Constructor Functions 
	//Describes how an object should be created
	//Create similar objects
	//Each object created is known as an instance of that object type

	function Contact(name, email){

		this.name = name;
		this.email = email;
	}

	var contact 1= new Contact("Andrew", "andrew@teamtreehouse.com");
	var contact 2= new Contact("dave", "dave@teamtreehouse.com");



//New Ex
function Dice(sides){
	this.sides = sides;
	this.roll = function(){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}
}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll);

//Let's make it more effecient



function Dice(sides){
	this.sides = sides;
	this.roll = diceRoll;
}

Dice.prototype.roll = function() {
	var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	return randomNumber;
	}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll);




















