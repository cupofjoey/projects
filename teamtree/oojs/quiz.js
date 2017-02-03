//question
function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
	return this.answer === choice;
}



//Quiz Prototype

function Quiz (questions){
	this.score = 0;
	this.questions = questions;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
	if(this.getCurrentQuestion().isCorrectAnswer(answer)){
		this.score++
	}
	this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function(){
	return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
	return this.currentQuestionIndex >= this.questions.length;
};

//Quiz Ui

var QuizUI = {
	displayNext: function (){
		if (quiz.hasEnded()){
			this.displayScore();
		}else{
			this.displayQuestion();
			this.displayChoices();
			this.displayProgress();
		}
	},
	displayQuestion: function(){
		this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
	},
	displayChoices: function(){
		var choices = quiz.getCurrentQuestion().choices;

		for(var = i; i <choices.length; i++) {
			this.populateIdWithHTML("choice" + i, choices[i]);
			this.guessHandler("guess" + i, choices[i]);
		}
	},
	displayScore: function (){
		var gameOverHTML = "<h1>Game Over</h1>";
		gameOverHTML += "<h2>Your score is: " + quiz.socre+ "</h2>";
		this.populateIdWithHTML("quiz", gameOverHTML);
	},

	populateIdWithHTML: function(id, text){
		var element = document.getElementById(id);
		element.innerHTML = text;
	},
	guessHandler: function(id, guess) {
		var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			QuizUI.displayNext();
		}
	},
	displayProgress: function(){
		var currentQuestionNumber = quiz.currentQuestionIndex + 1;
		this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
	}
};




























