window.onscroll = function() {
    var button = document.querySelector(".back-to-top");

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        button.style.display = "block"; 
    } else {
        button.style.display = "none";
    }
};



function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}







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

    new Question("What does HTML stand for ?",["Hyper Transfer Markup Language","Hyper Text Markup Language","High-level Text Markup Language","Hyperlink and Text Markup Language"],"Hyper Text Markup Language"),
	new Question("Which HTML tag is used for creating a hyperlink ?",["link tag ","url tag","a tag","hyperlink tag"],"a tag"),
	new Question("What does CSS stand for in the context of web development?",[" Cascading Style Sheets","Creative Style System","Computer Style Sheet"," Colorful Style Scheme"]," Cascading Style Sheets"),
	new Question("Which HTML tag is used for creating an ordered (numbered) list?",[" ul tag "," li tag"," ol tag","dl tag"],"ol tag"),
	new Question(" Which HTML tag is used to add a line break within a paragraph?",["lb tag"," br tag","newline tag","break tag"],""),
	new Question("Which HTML tag is used to insert an image on a webpage?",["img tag","picture tag","image tag","image src tag"],"img tag"),
	new Question(" In HTML, which attribute is used to specify the alternative text for an image?",[" alt"," text","image-text"," description"],"alt"),
	new Question("Which tag is used to create a horizontal line in HTML?",["line tag"," hr tag","line tag","horizontal tag"],"hr tag"),
	new Question("What does the HTML tag em represent?",["Emphasis"," End","Element","Email"],"Emphasis"),
	new Question("Which HTML tag is used to create a numbered or ordered list item?",["nl tag","li tag","ol tag","ul tag"],"li tag"),
	
];

var quiz = new Quiz (questions)

populate();