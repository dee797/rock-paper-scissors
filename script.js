let btn = document.querySelector("#start")
btn.addEventListener('click', playGame)


function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()* 3);
    return strings[randomNum];
}



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



function playGame() {
    setupGame();
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        turns.textContent = `Round ${i+1} of 5`;

        const humanChoice = "";
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


function setupGame() {
    document.body.removeChild("#start");

    const turns = document.createElement("h2");
    document.body.appendChild(turns);

    const desc = document.createElement("p");
    desc.textContent = "Pick one of the following:";
    document.body.appendChild(desc);

    const rock = document.createElement("button");
    rock.setAttribute("id", "rock");

    const paper = document.createElement("button");
    paper.setAttribute("id", "paper");

    const scissors = document.createElement("button");
    scissors.setAttribute("id", "scissors")

    const choices = [rock, paper, scissors]

    for (const choice of choices) {
        choice.classList.add("choices");
        document.body.appendChild(choice)
        choice.addEventListener("click", playRound(`'${choice.id}'`, getComputerChoice()))

    }
    

}

