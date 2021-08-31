//Start of the quiz declarations and functions
var timeEl = document.querySelector(".timer");
var timeToFinish = 75;
var timerInterval


//Starts the timer when clicked and hides the code title page and shows Question 1
function startQuiz() {

    var question1 = document.getElementById("question1");
    question1.style.display = "inline";
    var hide = document.getElementById("title-page");
    hide.style.display =
        "none";
};

function setTime() {
    timerInterval = setInterval(function () {
        timeToFinish--;
        timeEl.textContent = "Time:" + timeToFinish;
        if (timeToFinish === 0) {
            stopTimer();
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(timerInterval);
};

timeEl.textContent = "Time:" + timeToFinish;

function handleUserSelection(event) {
    var usersChoice = event.target.id;
    if (usersChoice === "correct") {
        document.getElementById("displayCorrect").innerText = "Correct!"
        //If user selects correct answer, then display "Correct!"
    }
    else {
        //if user selects wrong answer take 5 seconds & display "Wrong!"
        // timeToFinish = timeToFinish - 5;
        timeToFinish -= 5;
    };
};

function replayQuiz(event) {
    event.preventDefault();
    const username = document.getElementById("fname").value
    var highScoresStringified = localStorage.getItem("codeQuiz") || [];
    console.log(highScoresStringified);
    var highScoresParsed = JSON.parse(highScoresStringified);
    console.log(highScoresParsed);
    var user = {
        user: username,
        score: timeToFinish,
    }
    highScoresParsed.push(user);
    var stringifiedHighScores = JSON.stringify(highScoresParsed);
    console.log(stringifiedHighScores);
    localStorage.setItem("codeQuiz", stringifiedHighScores);

    for(let i = 0; i < highScoresParsed.length; i++){
        var user = highScoresParsed[i];
        console.log(user)
    }
    //save user score then reset quiz
};


//When the user picks an answer it hides question 1 and brings to Question 2
function questionChoices1(event) {
    handleUserSelection(event);
    var question2 = document.getElementById("question2");
    question2.style.display = "inline";
    var hide = document.getElementById("question1");
    hide.style.display = "none";
};
//Question 3 hide question 2
function questionChoices2(event) {
    handleUserSelection(event);
    var question3 = document.getElementById("question3");
    question3.style.display = "inline";
    var hide = document.getElementById("question2");
    hide.style.display = "none";
};

function questionChoices3(event) {
    handleUserSelection(event);
    var displayScore = document.getElementById("displayScore")
    displayScore.style.display = "inline";
    stopTimer();
    var userScore = document.getElementById("userScore");
    console.log(timeToFinish)
    userScore.textContent = timeToFinish;
    var hide = document.getElementById("question3")
    hide.style.display = "none";
};

