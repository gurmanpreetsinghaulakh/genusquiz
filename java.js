
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

	
    new Question("What is Java?",["A type of coffee","A programming language","A type of fruit","A database management system"],"A programming language"),
    new Question("Which keyword is used to define a class in Java?",["type"," struct"," class","define"]," class"),
    new Question("What is the entry point of a Java program?",["main()","start()","init()","execute()"],"main()"),
    new Question(" In Java, which of the following is a primitive data type for representing whole numbers?",[" float","double"," int","char"]," int"),
    new Question(" How do you declare a constant variable in Java?",[" final int myVar = 10","const myVar = 10"," var myVar = 10","static int myVar = 10"]," final int myVar = 10"),
    new Question("Which of the following is used to create an object of a class in Java?",["create","new","allocate","make"],"new"),
    new Question(" In Java, how do you specify that a method does not return any value?",[" void","null","none"," empty"]," void"),
    new Question("Which Java keyword is used to refer to the current instance of a class within its own methods?",[" this"," super"," self"," me"]," this"),
    new Question(" Which Java data structure stores elements in a sequential order and allows duplicates?",["Set"," Map"," List"," Queue"]," List"),
    new Question(" What is the keyword used for inheritance in Java?",[" inherits"," extends","implements"," inheritsFrom"]," extends")
];

var quiz = new Quiz (questions)

populate();