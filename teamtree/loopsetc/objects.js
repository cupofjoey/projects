//======== Lesson One

var person = {
	name: 'Sarah',
	age: 37,
	country: 'US', 
	treehouseStudent: true,
	skills: ['JS', 'CSS', 'HTML']
}



//============ Lesson 2

// You can access data in 2 diffent ways in JS
// One you can use brackets. 
// For example you can use alert(array[value])
// Another is the . notation
// Here you would use alert(array.value) from array


var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += "<p>I live in the " + person.country + "</p>";
person.name = 'Rainbow Dash';
message += "<p>But, I wish my name was " + person.name + "</p>"
person.age += 1;
message += "<p>My age is now " + person.age + "</p>";
message += '<p>I have'  + person.skills.length + 'skills' "</p>";


print(message);


//============ For In Loop

var student = {

	name: "Dave",
	grades: [80, 83, 90, 83]

};

for(var key in student) {
	console.log(key) //only bracket notations will work here;

//example

var person = {
	name: 'Sara',
	country: 'US',
	age: 35,
	treehouseStudent: true,
	skills : ['JS', 'HTML', 'CSS']
};

for(prop in person) {
	console.log(prop, ': ', person[prop]);
}


//============== Combining Arrays and Objects

var questions = [
  {
  	question: 'How many states are in the United States?',
  	answer: 50
  }
  {
  	question: 'How many continents are there?', 
  	answer: 7
  },
  {
  	question: 'How many legs does an insect have?', 
  	answer: 6
	}
];
var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);


//====================== Quiz

var students = [
	{	
	name: "Dave",
	track: "Front End Development"
	achievements: 158,
	points: 14730

	},
	{
	name: "Jody",
	track: "iOS Development"
	achievements: "175",
	points: "10730"
	},
	{
	name: "Jordan",
	track: "PHP Development"
	achievements: "55",
		points: '2025'
	},
	{
	name: "John",
	track: "Wordpress"
	achievements: "40",
	points: "1934"
	},
	{
	track: "None"
	name: "Trish",
	achievements:"45",
	points: "13436"
	}

];

var message = '';
var student; 

function print(message) {
var outputDiv = document.getElementById('output');
outputDiv.innerHTML = message;

}




for (var i=0; i < students.length; i += 1) {
student = students[i];

}

// ==========================


var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(studetn){


}

while(true)
search = prompt('Search Student Records: type a name or type quit to end');
if (search === null || search.toLowerCase() === 'quit') {
	break;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];

  if (student.name === search){

  }
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
}



































}

