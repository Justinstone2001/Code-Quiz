var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var highScoreEL = document.querySelector("#highScore");
var startBtn = document.querySelector("#start button");
var timeEl = document.querySelector("#time");
var question = document.querySelector("#quiz #question");
var questionEl = document.querySelector("#question");

var questionNumber = 0;
var questionArray = [];
var secondsLeft = 30;

function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
    highScoreEL.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
    highScoreEL.style.display = 'none';
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
    highScoreEL.style.display = 'none';
    score.textContent = secondsLeft;
  }
  if (state === 'highScore') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
    highScoreEL.style.display = 'block';
  }
}

var currentIndex = 0;
var questions = [
  {
    title: "What data type goes inside of quotes in python?",
    answers: [
      "String",
      "Integer", 
      "Array",
    ],
    correct: 0 
  },
  {
    title: "If you want to output something to the screen in Python, what would you use? ",
    answers: [
      "p()",
      "print()",
      "write()",
      "show()",
    ],
    correct: 1 
  },
  {
    title: "Which of the following is an example of a float? ",
    answers: [
      "3",
      "143",
      "5.0",
      "-2",
    ],
    correct: 2 
  },
  {
    title: "How would you call the first value in an array in python? ",
    answers: [
      "array[1]",
      "array[1st]",
      "array[0]",
      "array[value1]",
    ],
    correct: 2 
  }
];

questionEl.addEventListener("click", function (event) {
  var element = event.target;
  console.log(element);
  if (element.type === 'submit') {
    if ((element.textContent !== questions[currentIndex].answers[questions[currentIndex].correct])) {
      secondsLeft -= 3;
      alert("Incorrect!!")
    }
    currentIndex++;
    if (currentIndex === questions.length) {
      state = "end"
      displayState();
    }
    else {
      displayQuestions();
    }
  }
})

function displayQuestions() {
  questionEl.innerHTML = "";
  var questionTitle = document.createElement('h2');
  questionTitle.textContent = questions[currentIndex].title;
  questionEl.appendChild(questionTitle);
  for (var i = 0; i < questions[currentIndex].answers.length; i++) {
    var questionButton = document.createElement('button');
    questionButton.textContent = questions[currentIndex].answers[i];
    questionEl.appendChild(questionButton);
  }
}

function startTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to finish quiz...";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      state = "end";
      displayState();
      
    }
  }, 1000);
}

function init() {
  displayState();
}

startBtn.addEventListener("click", function () {
  state = 'quiz';
  startTime();
  displayState();
  displayQuestions();
});

init();

