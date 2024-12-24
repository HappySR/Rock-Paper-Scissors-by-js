let userScore = 0;
let compScore = 0;

let userChoice = "";
let compChoice = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let msg = document.getElementById("msg");
let userScoreBoard = document.getElementById("user-score");
let compScoreBoard = document.getElementById("comp-score");
let resetBtn = document.getElementById("resetBtn");

rock.addEventListener("click", () => {
    userChoice = "rock";
    generateCompChoice();
    checkResult();
});

paper.addEventListener("click", () => {
    userChoice = "paper";
    generateCompChoice();
    checkResult();
});

scissors.addEventListener("click", () => {
    userChoice = "scissors";
    generateCompChoice();
    checkResult();
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreBoard.innerText = userScore;
    compScoreBoard.innerText = compScore;
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
    msg.innerText = "Pick your move";
})

function generateCompChoice() {
    if(Math.random() < 0.33) {
        compChoice = "rock";
    }
    else if(Math.random() < 0.66) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
}

function checkResult() {
    if (userChoice === compChoice) {
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "grey";
        msg.style.color = "white";
    }
    else if (userChoice === "rock" && compChoice === "scissors" || userChoice == "scissors" && compChoice == "paper" || userChoice === "paper" && compChoice === "rock") {
        msg.innerText = `Congratulations🎉 You Win!\nYour ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
        msg.style.backgroundColor = "rgb(71, 255, 71)";
        msg.style.color = "yellow";
        userScore++;
        userScoreBoard.innerText = userScore;
    }
    else {
        msg.innerText = `Oops! You Lose!\n${compChoice.toUpperCase()} beats your ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor = "rgb(255, 55, 55)";
        msg.style.color = "rgb(110, 110, 110)";
        compScore++;
        compScoreBoard.innerText = compScore;
    }
}