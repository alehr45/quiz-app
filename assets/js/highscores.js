


var lastScore = localStorage.getItem("lastScore");
userScore.innerText = lastScore;







var saveData = function() {
var savedScore = localStorage.getItem("lastScore");
var userName = document.getElementById("username").value;
localStorage.setItem("name" , userName);
var savedName = localStorage.getItem("name");
console.log(savedName , savedScore);

}
    
    
    // var savedName = document.getElementById("saveScoreBtn").value;
    // // document.getElementById("saveScoreBtn").innerHTML = "Enter Your Name Here!";
    // console.log(savedName}

