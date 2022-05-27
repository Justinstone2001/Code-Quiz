var state = 'start';
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var nextBtn = document.querySelector("#next");
var timeEl = document.querySelector("#time");
var question = document.querySelector("#quiz #question");
var questionNumber = 0;
var questionArray = [];
var secondsLeft = 30;

function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
    showQuestions();
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }

}

function showQuestions() {
  var questionEl = document.querySelector("#question");
  var currentIndex = 0; // current question
  var questions = [
    {
      title: "Question 1",
      answers: [
        "Q1 - Answer 1",
        "Q1 - Answer 2", // index 1 of array is the correct answer 
        "Q1 - Answer 3",
      ],
      correct: 1 // index of correct answer
    },
    {
      title: "Question 2",
      answers: [
        "Q2 - Answer 1",
        "Q2 - Answer 2",
        "Q2 - Answer 3", // index 2 of array is the correct answer 
      ],
      correct: 2 // index of correct answer
    }
  ];

  var listOfAnswers = questions[currentIndex].answers;

  for (var i = 0; i < listOfAnswers.length; i++) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = listOfAnswers[i];
    questionEl.appendChild(buttonEl);
  }
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to finish quiz...";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function init() {
  displayState();
}

startBtn.addEventListener("click", function () {
  state = 'quiz';
  displayState();
  setTime();
});

nextBtn.addEventListener("click", function () {
  var position = 0;
  var element = event.target;
  state = 'end';
  displayState();
  
});


init();

