var topScores = []
var lastScore = localStorage.getItem("lastScore");
userScore.innerText = lastScore;

var saveData = function() {
var savedScore = localStorage.getItem("lastScore");
var userName = document.getElementById("username").value;
localStorage.setItem("name" , userName);
var savedName = localStorage.getItem("name");
var highScoresList = document.getElementById("highScoresList");
var highScores = localStorage.getItem("username", lastScore);
highScoresList.textContent = (userName) + " " + (lastScore);


}
    
 


