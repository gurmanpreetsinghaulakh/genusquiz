
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
    new Question("What is the capital city of India?",["New Delhi","Mumbai","Kolkata"," Bangalore"]," New Delhi"),
    new Question("Which river is known as the Ganga in India?",["Brahmaputra","Yamuna","Ganges","Indus"],"Ganges"),
    new Question("Which of the following is India's national bird?",["Peacock","Sparrow"," Crow","Pigeon"]," Peacock"),
    new Question("Who was the first Prime Minister of India?",["Mahatma Gandhi","Sardar Vallabhbhai Patel","Jawaharlal Nehru"," Rajendra Prasad"],"Jawaharlal Nehru"),
    new Question(" Which festival is known as the FESTIVAL OF LIGHTS in India?",["Diwali","Holi","Eid","Christmas"]," Diwali"),
    new Question(" India shares its longest international border with which country?",["Pakistan"," China","Nepal","Bangladesh"],"China"),
    new Question("What is the highest mountain peak in India and the world's third-highest?",["Kanchenjunga","Mount Everest"," Nanda Devi","Annapurna"]," Kanchenjunga"),
    new Question(" Which Indian state is known as the LAND OF FIVE RIVERS ?",["Punjab","Kerala","Gujarat","Rajasthan"],"Punjab"),
    new Question(" Who is often referred to as the Father of the Indian Constitution?",["Sardar Patel","Subhas Chandra Bose"," Dr. B.R. Ambedkar","Jawaharlal Nehru"],"Dr. B.R. Ambedkar"),
    new Question("What is the official currency of India?",["Dollar"," Euro","Rupee","Yen"]," Rupee"),
 

];

var quiz = new Quiz (questions);

populate();
