

//Variables and arrays for storing and gathering user information
var question = document.getElementById("question");
var scoreTextEl = document.getElementById("score");
var choices = Array.from(document.getElementsByClassName("choice-text"))
var codeQuestion = {};
var codeAnswers = false;
var questionData = 0;
var allQuestions = [];
var score = 0;
var timer = 60;
var timerEl = document.getElementById("timer");



// Function that starts a timer as soon as the browser loads the page and count down from 60
var beginTimer = function () {

    var countdown = function () {
        timer--;
        timerEl.textContent = "Time:" + timer;
        if (timer === 0) {

            endtimer();
        }
    }

    var timeInterval = setInterval(countdown, 1000);
    var endtimer = function () {
        clearInterval(timeInterval);
    }


}


//Array with objects holding all possible questions, choices and answers
let quizQuestions = [

    {
        question: "What does CSS stand for?",
        choice1: "Colorful Stlye Sheets",
        choice2: "Computer Style Sheets",
        choice3: "Creative Style Sheets",
        choice4: "Cascading Style Sheets",
        answer: 4
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for i = 1 to 5",
        choice2: "for (i=0; i<=5)",
        choice3: "for(i = 0; i <=5; i++)",
        choice4: "for (i <=5; i++)",
        answer: 3
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        choice1: "<h5>",
        choice2: "<head>",
        choice3: "<h1>",
        choice4: "<heading>",
        answer: 3
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        choice1: "var colors = red, green, blue",
        choice2: "var colors = ['red','green','blue']",
        choice3: "var colors = 'red', 'green', 'blue'",
        choice4: "var colors = 1 = (red), 2 = (green),3 = (blue)",
        answer: 2
    },

    {
        question: "Which CSS property controls the text size?",
        choice1: "font-style",
        choice2: "text-size",
        choice3: "font-size",
        choice4: "text style",
        answer: 3
    },
    {
        question: "In HTML, how can you make a numbered list?",
        choice1: "<dl>",
        choice2: "<ol>",
        choice3: "<ul>",
        choice4: "<list>",
        answer: 2
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choice1: "alt",
        choice2: "src",
        choice3: "longdesc",
        choice4: "title",
        answer: 1
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: 'msg("Hello World");',
        choice2: 'alertBox("Hello World");',
        choice3: 'msgBox("Hello World");',
        choice4: 'alert("Hello World");',
        answer: 4
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if (i != 5)",
        choice2: "if i <> 5",
        choice3: "if i =! 5 then",
        choice4: "if (i <> 5)",
        answer: 1
    }]





//Function that starts the game and starts functions
function startGame() {

    questionCount = 0;
    score = 0;
    allQuestions = [...quizQuestions];

    pullRandQuestion();
};

//Choses a random question and choices from array
function pullRandQuestion() {

    questionCount++;
    var randQuestion = Math.floor(Math.random() * allQuestions.length);
    currentQuestion = allQuestions[randQuestion];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {

        var number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    codeAnswers = true;
};

//Logs choice "number" with click of button
choices.forEach(choice => {
    choice.addEventListener("click", button => {
        if (!codeAnswers) return;

        codeAnswers = true;
        var userChoice = button.target;
        var userAnswer = userChoice.dataset["number"];
        //Creates a class out of the correct or incorrect answers

        var createClassRight = "correct";
        if (userAnswer == currentQuestion.answer) {
            createClassRight = "correct";


            var createClassWrong = "incorrect";
            if (userAnswer !== currentQuestion.answer) {
                createClassWrong = "incorrect";
            }
            addScore();
        }



        pullRandQuestion();



        if (createClassWrong !== "incorrect") {
            timer = timer - 10;
            return (timer);
        }

    });
});

var addScore = function () {
    score = score + 10;
    scoreTextEl.textContent = "Score: " + score;


};


startGame();
beginTimer();
