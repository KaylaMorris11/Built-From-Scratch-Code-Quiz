//Start of the quiz declarations and functions
var timeEl = document.querySelector(".timer");
var timeToFinish = 75;
//Starts the timer when clicked and hides the code title page and shows Question 1
function startQuiz() {

    var question1 = document.getElementById("question1")
    question1.style.display = "inline";
    var hide = document.getElementById("title-page");
    hide.style.display = "none";
}
function setTime() {
    var timerInterval = setInterval(function() {
        timeToFinish --;
        timeEl.textContent = "Time:" + timeToFinish;
        if (timeToFinish === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

timeEl.textContent = "Time:" + timeToFinish;

//When the user picks an answer it hides question 1 and brings to Question 2
function questionChoices1() {
var question2 = document.getElementById("question2")
question2.style.display = "inline";
var hide = document.getElementById("question1")
hide.style.display = "none";
};
//Question 3 hide question 2
function questionChoices2() {
var question3 = document.getElementById("question3")
question3.style.display = "inline";
var hide = document.getElementById("question2")
hide.style.display = "none";
};






//if else statement content source from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// var title = document.getElementById("title-page");
//     if (title.style.display === "inline") {
//         title.style.display = "none";
//       } else {
//         title.style.display = "none";
//   }
//     var question1 = document.getElementById("question1-box");
//     if (question1.style.display === "none") {
//       question1.style.display = "inline";
//     } else {
//       question1.style.display = "none";
//     }
//     var question2 = document.getElementById("question2-box");
//     if (question2.style.display === "inline") {
//       question2.style.display = "none";
//     } else {
//       question2.style.display = "inline";
//     } 

// function questionChoices() {
//     if( (onclick.#choice1) {
//         console.log(Wrong!)
//     }
// }