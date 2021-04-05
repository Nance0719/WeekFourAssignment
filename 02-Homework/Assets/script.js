
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
    correctAnswer: "choice-4"
    },
    {
    question: "The condition in an if/else statement is enclosed within ______.",
    answerOne: "1. quotes",
    answerTwo: "2. curly brackets",
    answerThree: "3. parentheses",
    answerFour:  "4 square brackets", 
    correctAnswer: "choice-2"
    }
]

var finalQuestionIndex = quizes.length - 1;
var currentQuestionIndex = 0;
var correct;
let userScore = 0;






function displayQuestionOne () {
    gameStartSection.style.visibility = "hidden";
    quizQuestions.style.visibility = "visible";
    
        

    
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
    scoreTitle.textContent = "Your final schore = " + userScore;


}


/// error is here try console.log in each if statement to see whats going on
function checkAnswer (answer) {
    
    correct = quizes[currentQuestionIndex].correctAnswer;
    if (answer === correct && currentQuestionIndex === finalQuestionIndex) {
        console.log("first if block calling finalScore right answer final question");
        console.log(answer);
        console.log(correct);
        console.log(currentQuestionIndex); 
        console.log(finalQuestionIndex);
        finalScore();
    }
    else if (answer !== correct && currentQuestionIndex === finalQuestionIndex) {
        console.log("second if block calling Final score wrong answer final question");
        console.log(answer);
        console.log(correct);
        console.log(currentQuestionIndex);
        console.log(finalQuestionIndex);
        finalScore();
    }

    else if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        console.log("third if black calling displayQuestionOne right answer")
        console.log(answer);
        console.log(correct);
        console.log(currentQuestionIndex);
        console.log(finalQuestionIndex);
        userScore = userScore + 1;
        theScore.textContent = "User Score = " + userScore;
        currentQuestionIndex++
        displayQuestionOne(); 
        
    }
    else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        console.log("fourth if block calling displayQuestionOne wrong answer")
        console.log(answer);
        console.log(correct);
        console.log(currentQuestionIndex);
        console.log(finalQuestionIndex);
        theScore = textContent = "User Score = " + userScore;
        currentQuestionIndex++
        displayQuestionOne();
    }
    

}







    
function startQuiz() {
    gameStartSection.style.visibility = "hidden";
    displayQuestionOne();
    
    
    }
    












startButton.addEventListener("click", startQuiz);




















