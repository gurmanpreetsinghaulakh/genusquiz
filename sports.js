

function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}






function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}






function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [

    new Question("What is the diameter of a standard basketball?",["28 inches","30 inches"," 29.5 inches","27.5 inches"]," 29.5 inches"),
    new Question(" How many players are there on a standard basketball team during a game?",["5","6","7","8"],"5"),
    new Question("In tennis, what is the standard height for the net at the center?",["30 inches"," 36 inches","40 inches","42 inches"]," 36 inches"),
    new Question("What is the maximum number of players on a standard tennis court during a singles match?",["1","2","3","4"],"1"),
    new Question("In football (soccer), how many players are there on a standard team, including the goalkeeper?",["8","10","11","12"],"11"),
];

var quiz = new Quiz (questions)

populate();