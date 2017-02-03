//=============Lesson 1================

var shoppingList = [
'carrots', 
'milk',
'eggs'
];


//=============Lesson 2==================

var shopping = [
'carrots', 
'milk',
'eggs'
];
console.log(shopping[0]);
console.log(shopping[1]);
console.log(shopping[2]);

//=============Lesson 3 - Length==================

//To add an item to the end of the array it's 
//array.push(whatever you want to add)
//To add and item to the beginning of the array it's
//array.unshift(whatever you want to add)

var playList = [];
playlist.push('I did it my way');
playlist.push('Respect', 'Imagine');
playlist.unshift("born to run", 'Maybelene', "Summer of 69");

printList(playlist);


//=============Lesson 4 - Pop and Shift==================

// To remove items from an Array in JS, you can use Pop and Shift
// Pop removes from end of the Array, but it also returns it
// Shift removes item at beginning of the array

var numbers = [1, 2, 3, 4, 5];

nums.pop()

//=============Lesson 5 - Loops on Arrays==================

var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
	
  document.write(message);
}

function printList(list){
	var listHTML = '<ol>';
	for(var i = 0; i <= list.length; i++){
		listHTML += '<li>' + list[i] + '<li>';

	}

}

//=============Lesson 6 - Useful Array Methods ========

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true){
	search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit to exit." );
	search = search.toLowerCase();
	if(search === 'quit'){
		break;
	} else if (search === 'list'){
		print(inStock.join(','));
	}else{
		if (inStock.indexOf(search) > -1 ){
			print('Yes, we have ' + search + ' in the store.');
		} else {
			print(search + ' is not in stock.');
		}
	}
}

//You can use the .join method to make an array into a string
//ex: array.join(','); to join arrays separated by commas
//array.concat() can join 2 arrays into a new combined one
//array.indexof(what you're looking for), to give you the 
//position value. 


//=============Lesson 7 - Two Dimensional Arrays ========

var playList = [
  ["I did it my way", 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'], 
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'The Boss'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']

];

function print(message) {
  document.write(message);
}

function printSongs( songs) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + 'by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);


//=========

var grades=[
[80, 90, 100, 95],
[75, 95, 85, 100],
[60, 80, 77, 90]
];

//==========Quiz

var questions = [
['How many state are in the United States?', 50],
['How man continents are there?', 7],
['How man legs does an insect have?', 6]
];

var correctAnswers = 0;
var questions;
var answer;
var response;
var html;

function print(message){
	document.write(message);
}

for(var i = 0; i < questions.length; i +=1){
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(question);
	response = parseInt(response);
	if(response=== answer){
		correctAnswers += 1;
	}
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);

//==============quiz2

var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr){
	var listHTML = '<ol>';
	for(var i = 0; i < arr.lenght; i +=1){
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
  	wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right."
html += '<h2> You go thse questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong: </h2>';
html += buildList(wrong);
print(html);










