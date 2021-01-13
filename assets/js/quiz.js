

//Variables and arrays for storing and gathering user information
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"))
var codeQuestion = {};
var codeAnswers = true;
var score = 0;
var questionData = 0;
var allQuestions = [];


//Array holding all possible questions
let questions = [

{
question: What does CSS stand for?

// Cascading Style Sheets
// Computer Stly Sheets
// Creative Style Sheets
// Colorful Stlye Sheets

question: How does a FOR loop start?

// for i = 1 to 5
// for (i=0; i<=5)
// for(i = 0; i <=5; i++)
// for (i <=5; i++)

question: Choose the correct HTML element for the largest heading:

//<h5>
//<head>
//<h1>
//<heading>

question: What is the correct way to write a JavaScript array?

// var colors = (1:"red",2:"green",3:"blue")
// var colors = ["red","green","blue"]
// var colors = "red", "green", "blue"
// var colors = 1 = ("red"), 2 = ("green"),3 = ("blue")

question: Which CSS property controls the text size?
// font-style
// text-size
// font-size
// text-style

question: How can you make a numbered list?

//<dl>
//<ol>
//<ul>
//<list>
    
question: Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?

// alt   Correct Answer
// src
// longdesc
// title

question: How do you write "Hello World" in an alert box?

// alert("Hello World");   Correct Answer
// msg("Hello World");
// msgBox("Hello World");
// alertBox("Hello World");

question: How to write an IF statement for executing some code if "i" is NOT equal to 5?

// if (i != 5)    Correct answer  
// if i <> 5
// if i =! 5 then
// if (i <> 5)

}]




startGame (

questionData = 0;
score = 0;



)