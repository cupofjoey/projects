// //While Loop:



// function randomNumber(upper) {
// 	return Math.floor(Math.random() * upper) + 1
// }
// var counter = 0;
// while(counter < 100) {
// 	var randNum = randomNumber(6);
// 	document.write(randNum + ' ');
// 	counter += 1;
// }


var upper=10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
	return Math.floor(Math.random() * upper) +1;
}

while(guess != randomNumber) {
	guess = getRandomNumber(upper);
	attempts += 1;
}
document.write("<p> The random number was: " + randomNumber );

//you need a way to break out of the loop
//to exit from the loop

//test condition is evaluated before the loop

//==============Do While Loop =================

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}


do {
guess = prompt("Guess a number between 1 and 10");
guessCount += 1;
if(parsInt(guess) === randomNumber) {
	correctGuess = true;
	}
} while (!correctGuess)

document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' attempts to guess it right;');

//====================For Loop=======================

var html = '';



for(var i = 0; i < 20; i+= 1) {
	html += '<div>' + i + '<div>';
}
document.write(html);

//This prints the div 20 times




//=========Breaks===========

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}


while(true) //or we can do (guessCount < 10) to give only 10 guesses
guess = prompt("Guess a number between 1 and 10");
guessCount += 1;
if(parsInt(guess) === randomNumber) {
	correctGuess = true;
	break;
	}
} 

document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' attempts to guess it right;');

//=================Refactor Challenge===================

var html = '';
var red;
var green;
var blue;
var rgbColor;

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

document.write(html);


//==============Refactor Baby===============
var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomColor() {
	var color = Math.floor(Math.random() * 256 );
	return color;
}


function print(message){
	document.write(message);
}

for (var i = 0; i < 10; i+=i){
	red = randomColor();
	green = randomColor();
	blue = randomColor();
	rgbColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';
}
	print(html);






