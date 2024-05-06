
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

	new Question("What is Python?",[" A reptile","A type of cobra","A high-level programming language","A type of database"]," A high-level programming language"),
	new Question("Which of the following is NOT a valid Python data type?",["int","float","char"," str"],"char"),
	new Question("How do you define a single-line comment in Python?",[" // Comment"," /* Comment */","# Comment","/ Comment /"],"# Comment"),
	new Question("In Python, how do you declare a variable and assign a value to it?",["var x = 5","x = 5","let x = 5"," x := 5"],"x = 5"),
	new Question("Which statement is used to exit a loop prematurely in Python?",[" break"," stop"," exit","quit"],"break"),
	new Question(" What is the result of the expression 3 + 4 * 2 in Python?",["14","11","10","22"],"11"),
	new Question("Which of the following is used to define a function in Python?",["func","def","function","define"],"def"),
	new Question("Which module is used for working with regular expressions in Python?",["re","regex","string","match"],"re"),
	new Question("What is the Python keyword for creating a conditional branch in code?",["branch","if","case","switch"],"if"),
	new Question("Which data structure in Python is ordered and indexed but does not allow duplicate elements?",["list","tuple","dictionay","set"],"set"),
];

var quiz = new Quiz (questions)

populate();