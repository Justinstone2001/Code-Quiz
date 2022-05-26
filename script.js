var state = 'start';
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var timeEl = document.querySelector("#time")

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
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }
}

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to finish quiz.";
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

quizTitle.addEventListener("click", function () {
  state = 'end';
  displayState();
});

init();

