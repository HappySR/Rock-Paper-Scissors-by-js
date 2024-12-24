let userScore = 0;
let compScore = 0;

let userChoice = 0;
let compChoice = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let msg = document.getElementById("msg");

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

function getCompChoice() {
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
    }
    else if (userChoice === "rock" && compChoice === "scissors" || userChoice == "scissors" && compChoice == "paper" || userChoice === "paper" && compChoice === "rock") {
        msg.innerText = `Congratulations🎉 You Win!\n${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "rgb(71, 255, 71)";
        msg.style.color = "yellow";
    }
    else {
        msg.innerText = `Oops! You Lose!\n${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "rgb(255, 55, 55)";
        msg.style.color = "rgb(110, 110, 110)";
    }
}