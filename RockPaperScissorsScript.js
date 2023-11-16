const playerText = document.querySelector("#playerText"); 
const computerText = document.querySelector("#computerText"); 
const resultText = document.querySelector("#resultText"); 
const countdownElement = document.querySelector("#countDown");
const resetButton = document.querySelector("#resetButton");


const choiceButton = document.querySelectorAll(".choiceButton"); 

let player; 
let computer; 
let result; 

let wins = 0;
let losses = 0;
let ties = 0;

function startCountdown() {
    let timeLeft = 6;
    countdownElement.textContent = timeLeft;

    let timer = setInterval(function () {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "LET'S PLAY AGAIN!";

            // Update texts after countdown finishes
            playerText.textContent = `Player: ${player}`; 
            computerText.textContent = `Computer: ${computer}`; 
            resultText.textContent = `You chose ${player}. The computer chose ${computer}. ${checkWinner()}`;
        
            updateScoreboard() 
        }
    }, 1000);
}


choiceButton.forEach(button => button.addEventListener("click", ()=> {
    player = button.textContent;

    playerText.textContent = 'Player: ';
    computerText.textContent = 'Computer: ';
    resultText.textContent = 'Result: ';

    computerTurn (); 
    countDown.textContent = startCountdown() 
}));


function computerTurn () {
    let possible = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * possible.length);
    computer = possible[random];
}

function updateScoreboard() {
    document.querySelector("#winCount").textContent = wins;
    document.querySelector("#lossCount").textContent = losses;
    document.querySelector("#tieCount").textContent = ties;
}

function checkWinner() { 
    if (player === computer) {
        ties++;
        return "You tied!";
    } else if ((player === "ROCK" && computer === "SCISSORS") ||
               (player === "PAPER" && computer === "ROCK") ||
               (player === "SCISSORS" && computer === "PAPER")) {
        wins++;
        return "You win!";
    } else {
        losses++;
        return "You lose!";
    }
}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScoreboard();
    
    playerText.textContent = 'Player: ';
    computerText.textContent = 'Computer: ';
    resultText.textContent = 'Result: ';

    countdownElement.textContent = "Get Ready!"
}

resetButton.addEventListener("click", resetGame);