let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const strings = ["rock", "paper", "scissors"];
    var userInput = parseInt(prompt("Enter the number for one of the choices below:\n1. Rock\n2. Paper\n3. Scissors"));

    while (isNaN(userInput) || userInput > 3 || userInput < 1) {
        
        alert("Invalid entry. Please enter a number from 1 to 3.");
        var userInput = parseInt(prompt("Enter the number for one of the choices below:\n1. Rock\n2. Paper\n3. Scissors"));
    }

    return strings[userInput-1];
}

function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()* 3);
    return strings[randomNum];
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')) {
        
        alert(`You lose! You chose ${humanChoice}, which loses to ${computerChoice}.`);
        computerScore++

    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        
        alert(`You win! You chose ${humanChoice}, which beats ${computerChoice}.`);
        humanScore++

    } else {

        alert(`It's a tie! You both chose ${humanChoice}`);
    }
}


//test

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);