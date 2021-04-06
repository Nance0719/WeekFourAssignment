
// Grab our HTML element References
let qTitle = document.querySelector("#title");
let choice1 = document.querySelector("#choice-1");
let choice2 = document.querySelector("#choice-2");
let choice3 = document.querySelector("#choice-3");
let choice4 = document.querySelector("#choice-4");
let startButton = document.querySelector("#start-button");
let gameStartSection = document.querySelector("#homePage");
let finalUserScore = document.querySelector("#finalScore");
let quizQuestions = document.querySelector("#questions");
let theScore = document.querySelector("#gameScore");
let scoreTitle = document.querySelector("#scoreTitle");
let submitScore = document.querySelector("#submitScore");
let userHighScore = document.querySelector("#initials");
let viewHighScoreButton = document.querySelector("#highscore-button");
let viewHighScore = document.querySelector("#highScore");
let highScoresList = document.querySelector("#highScores-List");
let quizTimer = document.querySelector("#timer");
let clearButton = document.querySelector("#clearHighScores");
let gameRestart = document.querySelector(".restart");
let gameBack = document.querySelector(".gameBack");





let quizes = [
    {

   question: "A RWD vehicle sends the power to the ___________",
   answer: ["left side wheels", "right side wheels", "front wheels", "rear wheels"],
   correctAnswer: "choice-4"
    },

    {
    question: "A supercharger is _________",
    answer: ["air driven", "exhaust driven", "belt driven", "liquid driven",],
    correctAnswer: "choice-3"
    },
    {
    question: "A turbocharger is _____________",
    answer: ["air driven", "liquid driven", "belt driven", "exhaust driven"],
    correctAnswer: "choice-4"
    },

    {
    question: "A rear wings actual use is to create ______________",
    answer: ["better looks", "aerodynamics", "downforce", "speed"],
    correctAnswer: "choice-3"
    },
    {
    question: "The term V8, W8, Flat 8, inline 8 all mean the car has _____________",
    answer: ["six cylinders", "four cylinders", "eight cylinders", "ten cylinders"], 
    correctAnswer: "choice-3"
    }
]

var finalQuestionIndex = quizes.length - 1;
var currentQuestionIndex = 0;
var correct;
let userScore = 0;
let timeLeft = 59;
let timerInterval;








function displayQuestionOne () {

    gameStartSection.style.display = "none";
    quizQuestions.style.display = "block";

  
    var currentQuestion = quizes[currentQuestionIndex];

        qTitle.textContent = currentQuestion.question;
        choice1.textContent = currentQuestion.answer[0];
        choice2.textContent = currentQuestion.answer[1];
        choice3.textContent = currentQuestion.answer[2];
        choice4.textContent = currentQuestion.answer[3];

    
};


function finalScore() {
    quizQuestions.style.display = "none";
    finalUserScore.style.display = "block";
    scoreTitle.textContent = "Your final score = " + userScore;
    clearInterval(timerInterval);


}



function checkAnswer (answer) {
   
    correct = quizes[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex === finalQuestionIndex) {
        userScore = userScore + 10;
        console.log(userScore);
        theScore.textContent = "User Score = " + userScore;
        finalScore();
    }
    else if (answer !== correct && currentQuestionIndex === finalQuestionIndex) {
        if (userScore === 0) {
            userScore = 0;
        }
        else {
        userScore = userScore - 10;
        
        }
        timeLeft = timeLeft - 10;
        quizTimer.textContent = "Time left: " + timeLeft;
        console.log(userScore);
        
     
        theScore.textContent = "User Score = " + userScore;
        finalScore();
    }

    else if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
  
        userScore = userScore + 10;
        console.log(userScore);
        theScore.textContent = "User Score = " + userScore;
        currentQuestionIndex++
        displayQuestionOne(); 
        
    }
    else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        if (userScore === 0) {
            userScore = 0;
        }
        else {
            userScore = userScore - 10;
        }
        timeLeft = timeLeft - 10;
        quizTimer.textContent = "Time left: " + timeLeft;

        console.log(userScore);
        theScore.textContent = "User Score = " + userScore;
        currentQuestionIndex++
        displayQuestionOne();
    }
    

}


    
startButton.addEventListener("click", function () {

    timerInterval = setInterval(function()  {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            finalScore();
        }
    
    }, 1000);
    displayQuestionOne();
    
    
});
    


submitScore.addEventListener("click", function () {
    gameStartSection.style.display = "block";
    finalUserScore.style.display = "none";
    viewHighScore.style.display = "none";

    let savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    let currentUser = userHighScore.value.trim();
    let newHighScore = {
        name: currentUser,
        score: userScore
    };
    
 
    savedHighscores.push(newHighScore);
    localStorage.setItem("savedHighscores" , JSON.stringify(savedHighscores));
    userHighScore.value = '';
    

});



function displayHighScore() {
    highScoresList.textContent = "";
    
    let scoreList = JSON.parse(localStorage.getItem("savedHighscores")) || [];

    for(let i = 0; i < scoreList.length; i++) {

        let newScoreName = document.createElement("li");
        newScoreName.textContent = "Initials - " + scoreList[i].name + "    |   " + "Score - " + scoreList[i].score;


        highScoresList.appendChild(newScoreName);

        
       
    }

}


viewHighScoreButton.addEventListener("click", function () {
    gameStartSection.style.display = "none";
    quizQuestions.style.display = "none";
    finalUserScore.style.display = "none";
    viewHighScore.style.display = "block";

    let storedScores = JSON.parse(localStorage.getItem("highScores"));

    if(storedScores !== null) {
        highscores = storedScores;
    }
   
    clearInterval(timerInterval);
    displayHighScore();

});

gameRestart.addEventListener("click", function () {

    gameStartSection.style.display = "block";
    finalUserScore.style.display = "none";
    viewHighScore.style.display = "none";

    currentQuestionIndex = 0;
    userScore = 0;
    timeLeft = 59;

});

gameBack.addEventListener("click", function () {

    gameStartSection.style.display = "block";
    finalUserScore.style.display = "none";
    viewHighScore.style.display = "none";

    currentQuestionIndex = 0;
    userScore = 0;
    timeLeft = 59;

});



clearButton.addEventListener("click", function () {

    window.localStorage.clear();
   displayHighScore();


});














//                         TASKS TO BE COMPLETED

//change questions 
//make read me
// make question answers an array
//  refractor page




