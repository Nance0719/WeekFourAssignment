
// Grab our HTML element References
let qTitle = document.querySelector("#title");
let choice1 = document.getElementById("choice-1");
let choice2 = document.querySelector("#choice-2");
let choice3 = document.querySelector("#choice-3");
let choice4 = document.querySelector("#choice-4");
var startButton = document.getElementById("start-button");
var gameStartSection = document.getElementById("homePage");
let finalUserScore = document.getElementById("finalScore");
var quizQuestions = document.getElementById("questions");
let theScore = document.getElementById("gameScore");
let scoreTitle = document.getElementById("scoreTitle");
let submitScore = document.getElementById("submitScore");
let userHighScore = document.getElementById("initials");
let viewHighScoreButton = document.getElementById("highscore-button");
let viewHighScore = document.getElementById("highScore");
let highScoresList = document.querySelector("#highScores-List");






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






function displayQuestionOne () {
    finalUserScore.style.visibility = "hidden";
    gameStartSection.style.visibility = "hidden";
    quizQuestions.style.visibility = "visible";
    // finalUserScore.classList.toggle("hidden");
    // gameStartSection.classList.toggle("hidden");
    // quizQuestions.classList.remove("hidden");
    
        
    
    var currentQuestion = quizes[currentQuestionIndex];

        qTitle.textContent = currentQuestion.question;
        choice1.textContent = currentQuestion.answerOne;
        choice2.textContent = currentQuestion.answerTwo;
        choice3.textContent = currentQuestion.answerThree;
        choice4.textContent = currentQuestion.answerFour;

    
};


function finalScore() {
    gameStartSection.style.visibility = "hidden";
    quizQuestions.style.visibility = "hidden";
    finalUserScore.style.visibility = "visible";
    // quizQuestions.classList.toggle("hidden"); // turning hidden on
    // finalUserScore.classList.remove("hidden"); // turning hidden off
    scoreTitle.textContent = "Your final score = " + userScore;

    // userScore = 0;
    // currentQuestionIndex = 0;


}



function checkAnswer (answer) {
   
    correct = quizes[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex === finalQuestionIndex) {
        userScore = userScore + 10;
        theScore.textContent = "User Score = " + userScore;
        finalScore();
    }
    else if (answer !== correct && currentQuestionIndex === finalQuestionIndex) {
        userScore = userScore - 10;
        theScore.textContent = "User Score = " + userScore;
        finalScore();
    }

    else if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
  
        userScore = userScore + 10;
        theScore.textContent = "User Score = " + userScore;
        currentQuestionIndex++
        displayQuestionOne(); 
        
    }
    else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        userScore = userScore - 10;
        theScore = textContent = "User Score = " + userScore;
        currentQuestionIndex++
        displayQuestionOne();
    }
    

}


    
startButton.addEventListener("click", function () {

    gameStartSection.style.visibility = "hidden";
    displayQuestionOne();
    
    
});
    


submitScore.addEventListener("click", function () {
    gameStartSection.style.visibility = "hidden";
    quizQuestions.style.visibility = "hidden";
    finalUserScore.style.visibility = "visible";

    let savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    let currentUser = userHighScore.value.trim();
    let newHighScore = {
        name: currentUser,
        score: userScore
    };
    
 
    savedHighscores.push(newHighScore);
    localStorage.setItem("savedHighscores" , JSON.stringify(savedHighscores));

    

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
    gameStartSection.style.visibility = "hidden";
    quizQuestions.style.visibility = "hidden";
    finalUserScore.style.visibility = "hidden";
    viewHighScore.style.visibility = "visible";

    let storedScores = JSON.parse(localStorage.getItem("highScores"));

    if(storedScores !== null) {
        highscores = storedScores;
    }
   

    displayHighScore();

});


















//                         TASKS TO BE COMPLETED

  
//  create a timer for questions
//  set timer to minus 10 seconds from score when answer is wrong. 
//  set score to give 10 points for right answer and take away 10 if answer is wrong
//  make a restart button
//  set all page text to be in the same spot on the page
// try to clear high scores from memory
// design a game reset

//  style page
//  refractor page




