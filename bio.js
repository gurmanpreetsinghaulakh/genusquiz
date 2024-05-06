

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

    new Question("What is the basic structural and functional unit of life?",["Cell ","Tissue ","Organ ","Organism"],"Cell "),
    new Question(" Which molecule stores genetic information in cells? ",["Protein","Carbohydrate","DNA","Lipid"],"DNA"),
    new Question(" What is the process by which green plants and some other organisms convert sunlight into chemical energy? ",["Respiration","Photosynthesis ","Fermentation","Digestion"],"Photosynthesis "),
    new Question("Which of the following is not a primary tissue type in animals? ",[" Epithelial tissue"," Connective tissue","Nervous tissue ","Parenchyma tissue"],"Parenchyma tissue"),
    new Question("Which gas do humans primarily inhale and exhale during respiration? ",["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],"Oxygen"),

];

var quiz = new Quiz (questions)

populate();