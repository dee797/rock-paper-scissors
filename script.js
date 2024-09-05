const CHOICES = ["rock", "paper", "scissors"];
let btn = document.querySelector("#start")
btn.addEventListener('click', playGame)



function getComputerChoice() {
    const randomNum = Math.floor(Math.random()* 3);
    return CHOICES[randomNum];
}



function setupGameElements() {
    document.body.removeChild(document.querySelector("#start"));
    
    const desc = document.createElement("h2");
    desc.setAttribute("id", "desc");
    desc.textContent = "Pick one of the following:";
    document.body.appendChild(desc);

    for (let i = 0; i < 3; i++) {
        const temp = document.createElement("button");
        temp.setAttribute("id", CHOICES[i]);
        temp.classList.add("choices");
        temp.innerText = `${CHOICES[i].charAt(0).toUpperCase()}${CHOICES[i].substring(1)}`
        document.body.appendChild(temp);
    }

    const runningScore = document.createElement("p");
    runningScore.setAttribute("id", "runningScore")
    document.body.appendChild(runningScore);
    
    const roundResults = document.createElement("p");
    roundResults.setAttribute("id", "results");
    document.body.appendChild(roundResults);

    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("id", "next");
    document.body.appendChild(nextBtn);
    nextBtn.style.display = "none";
    
}



function toggleChoicesDisplay(flag) {
    const desc = document.querySelector("#desc");
    const choiceButtons = document.querySelectorAll(".choices");
    const roundResults = document.querySelector("#results");
    const nextBtn = document.querySelector("#next");
    
    if (flag) {
        desc.style.display = "block";
        roundResults.style.display = "none";

        for (const choice of choiceButtons) {
            choice.style.display = "inline";
        }
    } else {
        desc.style.display = "none";
        roundResults.style.display = "block";
        nextBtn.style.display = "block";

        for (const choice of choiceButtons) {
            choice.style.display = "none";
        }
    }
}



function playGame() {
    setupGameElements();
    toggleChoicesDisplay(true);

    let humanScore = 0;
    let computerScore = 0;

    const choices = document.querySelectorAll(".choices")
    for (const choice of choices) {
        choice.addEventListener("click", playRound(`'${choice.id}'`, getComputerChoice()))
    }

    const roundResults = document.querySelector("#results");



    function playRound(humanChoice, computerChoice) {
    
        while (humanScore < 5 || computerScore < 5) {
            if ((humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'rock')) {
            
            roundResults.textContent= `You lose this round!\n
            You chose ${humanChoice}, and the computer chose ${computerChoice}.
            Unfortunately, ${humanChoice} loses to ${computerChoice}.`;
            computerScore++
    
            } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                   (humanChoice === 'paper' && computerChoice === 'rock') ||
                   (humanChoice === 'scissors' && computerChoice === 'paper')) {
            
            roundResults.textContent =`You win this round!\n
            You chose ${humanChoice}, and the computer chose ${computerChoice}.
            ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice}!`;
            humanScore++
    
            } else {
    
            roundResults.textContent = `It's a tie! You both chose ${humanChoice}.`;
            }
    
    
            toggleChoicesDisplay(false);
        }
    }


    if (humanScore === 5) {
        roundResults.textContent = `You won the game!\nYour score was ${humanScore}, and the computer's score was ${computerScore}.\n
You won by ${humanScore-computerScore} point(s).`;
    } else if (humanScore === computerScore) {
        roundResults.textContent = `It's a tie!\nYour score and the computer's score were both ${humanScore}.`;
    } else {
        roundResults.textContent = `You lost the game!\nYour score was ${humanScore}, and the computer's score was ${computerScore}.\n
You lost by ${computerScore-humanScore} point(s).`
    }
}
