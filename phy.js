


// Define a Quiz object constructor
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  // Prototype method to get the current question
  Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
  };
  
  // Prototype method to check if the quiz has ended
  Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
  };
  
  // Prototype method to handle user's answer selection
  Quiz.prototype.guess = function(answer) {
    // Check if the selected answer is correct
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    // Move to the next question
    this.questionIndex++;
  };
  
  // Define a Question object constructor
  function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  // Prototype method to check if a choice is the correct answer
  Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
  }
  
  // Function to populate and display questions and choices
  function populate() {
    var element = document.getElementById('question');
    if (quiz.isEnded()) {
      // If the quiz is over, display the user's score
      showScores();
    } else {
      // Display the current question
      element.innerHTML = quiz.getQuestionIndex().text;
  
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
        var choiceElement = document.getElementById('choice' + i);
        choiceElement.innerHTML = choices[i];
        // Set up click event listeners for answer choices
        guess("btn" + i, choices[i]);
      }
  
      showProgress();
    }
  }
  
  // Function to handle user's answer selection
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      // Process the user's guess and move to the next question
      quiz.guess(guess);
      populate();
    }
  }
  
  // Function to display the current question number and total questions
  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  }
  
  // Function to display the user's final score
  function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    element.innerHTML = gameOverHTML;
  }
  
  // Create an array of Question objects
  var questions = [
    new Question("What is the SI unit of force?", ["Joule", "Newton", "Watt", "Volt"], "Newton"),
    new Question("Which of these is a vector quantity?", ["Speed", "Distance", "Mass", "Velocity"], "Velocity"),
    new Question("Which of the following colors of light has the shortest wavelength?", ["Red", "Green", "Blue", "Yellow"], "Blue"),
    new Question("What is the unit of electrical resistance?", ["Volt", "Ohm", "Watt", "Ampere"], "Ohm"),
    new Question("Which of the following is a unit of electric charge?", ["Volt", "Ampere", "Coulomb", "Watt"], "Coulomb"),
  ];
  
  // Create a Quiz object
  var quiz = new Quiz(questions);
  
  // Start the quiz by populating the first question
  populate();
  