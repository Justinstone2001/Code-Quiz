var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var scoreEL = document.querySelector("#score");
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
    score.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
    score.style.display = 'none';
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
    score.style.display = 'none';
    score.textContent = secondsLeft;
  }
  if (state === 'score') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
    score.style.display = 'block';
  }
}
var questions = [
  {
    title: "What data type goes inside of quotes in python?",
    answers: [
      "A: String",
      "B: Integer", 
      "C: Array",
    ],
    correct: 0 
  },
  {
    title: "If you want to output something to the screen in Python, what would you use? ",
    answers: [
      "A: p()",
      "B: print()",
      "C: write()",
      "D: show()",
    ],
    correct: 1 
  },
  {
    title: "Which of the following is an example of a float? ",
    answers: [
      "A: 3",
      "B: 143",
      "C: 5.0",
      "D: -2",
    ],
    correct: 2 
  },
  {
    title: "How would you call the first value in an array in python? ",
    answers: [
      "A: array[1]",
      "B: array[1st]",
      "C: array[0]",
      "D: array[value1]",
    ],
    correct: 2 
  }
];

questionEl.addEventListener("click", function (event) {
  var element = event.target;
  console.log(element);
  if (element.type === 'submit') {
    if ((element.textContent !== questions[questionNumber].answers[questions[questionNumber].correct])) {
      secondsLeft -= 3;
      alert("Incorrect!! -3 seconds :(")
    }
    questionNumber++;
    if (questionNumber === questions.length) {
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
  questionTitle.textContent = questions[questionNumber].title;
  questionEl.appendChild(questionTitle);
  for (var i = 0; i < questions[questionNumber].answers.length; i++) {
    var questionButton = document.createElement('button');
    questionButton.style.marginBottom = "20px";
    questionButton.style.display = "block";
    questionButton.style.fontFamily = "Courier, monospace";
    questionButton.style.fontSize = "20px";
    questionButton.textContent = questions[questionNumber].answers[i];
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

