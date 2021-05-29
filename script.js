var startTheQuiz = document.getElementById("start-quiz");


var timeEl = document.querySelector(".timer");

var timeToFinish = 75;
//Start button
// startTheQuiz.addEventListener("click", startQuiz)

//if else statement content source from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function startQuiz() {

    var question1 = document.getElementById("question1")
    question1.style.display = "inline";
    var hide = document.getElementById("title-page")
    hide.style.display = "none";
}

function setTime() {
    var timerInterval = setInterval(function() {
        timeToFinish--;
        timeEl.textContent = "Time:" + timeToFinish;

        if (secondsLeft === 0) {

            clearInterval(timerInterval);
        }

    }, 75000);
}


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