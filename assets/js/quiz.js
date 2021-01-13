

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
question: "What does CSS stand for?",

choice1: "Colorful Stlye Sheets",
choice2: "Computer Stly Sheets",
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
choice1: "var colors = (1:"red",2:"green",3:"blue")",
choice2: "var colors = ["red","green","blue"]",
choice3: "var colors = "red", "green", "blue"",
choice4: "var colors = 1 = ("red"), 2 = ("green"),3 = ("blue")",
answer: 2

},
{
question: "Which CSS property controls the text size?",
choice1: "font-style",
choice2: "text-size",
choice3: "font-size",
choice4 "text-style",
answer: 3

},
{

question: "How can you make a numbered list?",
choice1: "<dl>",
choice2: "<ol>",
choice3: "<ul>",
choice4 "<list>",
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

question: "How do you write "Hello World" in an alert box?",
choice1: "alert("Hello World");",
choice2: "msg("Hello World");",
choice3: "msgBox("Hello World");",
choice4: "alertBox("Hello World");",
answer: 1

},
{

question: "How to write an IF statement for executing some code if "i" is NOT equal to 5?",
choice1: "if (i != 5)",
choice2: "if i <> 5",
choice3: "if i =! 5 then",
choice4: "if (i <> 5)",
answer: 1

}]




startGame (

questionData = 0;
score = 0;



)