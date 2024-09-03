document.querySelector("button").onclick = playGame;


function getHumanChoice() {
    const strings = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter the number for one of the choices below:\n1. Rock\n2. Paper\n3. Scissors");
    

    while (userInput !== null) {
        const temp = parseInt(userInput);
        
        if (isNaN(temp) || temp > 3 || temp < 1) {
            alert("Invalid entry. Please enter a number from 1 to 3.");
            userInput = prompt("Enter the number for one of the choices below:\n1. Rock\n2. Paper\n3. Scissors");
            
        } else {
            return strings[temp-1];
        }
        
    }

    if (userInput === null) throw "Stop script"
}


function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()* 3);
    return strings[randomNum];
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'rock')) {
            
            alert(`You lose!\n
                   You chose ${humanChoice}, and the computer chose ${computerChoice}.
                   Unfortunately, ${humanChoice} loses to ${computerChoice}.`);
            computerScore++
    
        } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                   (humanChoice === 'paper' && computerChoice === 'rock') ||
                   (humanChoice === 'scissors' && computerChoice === 'paper')) {
            
            alert(`You win!\n
                   You chose ${humanChoice}, and the computer chose ${computerChoice}.
                   ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice}!`);
            humanScore++
    
        } else {
    
            alert(`It's a tie! You both chose ${humanChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        alert(`This is turn ${i+1} out of 5`)

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        alert(`You won the game!\nYour score was ${humanScore}, and the computer's score was ${computerScore}.\n
You won by ${humanScore-computerScore} point(s).`)
    } else if (humanScore === computerScore) {
        alert(`It's a tie!\nYour score and the computer's score were both ${humanScore}.`)
    } else {
        alert(`You lost the game!\nYour score was ${humanScore}, and the computer's score was ${computerScore}.\n
You lost by ${computerScore-humanScore} point(s).`)
    }
}

