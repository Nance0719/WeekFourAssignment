
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

   question: "Arrays in Javascript can used to store ______.",
   answerOne: "Numbers and Settings",
   answerTwo: "Alerts",
   answerThree: "booleans",
   answerFour:  "Other Arrays",
   correctAnswer: "choice-4"
    },
    {
    question: "Commonly used data types DO NOT include:",
    answerOne: "strings",
    answerTwo: "booleans",
    answerThree: "alerts",
    answerFour:  "numbers",
    correctAnswer: "choice-3"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerOne: "1. JavaScript",
    answerTwo: "2. terminal/bash",
    answerThree: "3. for loops",
    answerFour:  "4 console.log",
    correctAnswer: "choice-4"
    },
    {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answerOne: "1. commas",
    answerTwo: "2. curly brackets",
    answerThree: "3. quotes",
    answerFour:  "4 parentheses",
    correctAnswer: "choice-3"
    },
    {
    question: "The condition in an if/else statement is enclosed within ______.",
    answerOne: "1. quotes",
    answerTwo: "2. curly brackets",
    answerThree: "3. parentheses",
    answerFour:  "4 square brackets", 
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
        choice1.textContent = currentQuestion.answerOne;
        choice2.textContent = currentQuestion.answerTwo;
        choice3.textContent = currentQuestion.answerThree;
        choice4.textContent = currentQuestion.answerFour;

    
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
        newScoreName.textContent = "User Initials - " + scoreList[i].name + " " + "User Score - " + scoreList[i].score;


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




