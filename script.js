const CHOICES = ["rock", "paper", "scissors"];
let btn = document.querySelector("#start")
btn.addEventListener('click', playGame, {once:true})



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
    
    const roundResults = document.createElement("h2");
    roundResults.setAttribute("id", "results");
    roundResults.textContent = " "
    document.body.appendChild(roundResults);

    const runningScore = document.createElement("p");
    runningScore.setAttribute("id", "runningScore")
    document.body.appendChild(runningScore);

    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("id", "next");
    nextBtn.textContent = "Next round";
    nextBtn.style.display = "none";
    document.body.appendChild(nextBtn);
    nextBtn.addEventListener("click", () => toggleChoicesDisplay(true));
    
}



function toggleChoicesDisplay(flag) {
    const desc = document.querySelector("#desc");
    const choiceButtons = document.querySelectorAll(".choices");
    const roundResults = document.querySelector("#results");
    const nextBtn = document.querySelector("#next");
    
    if (flag) {
        desc.style.display = "block";
        roundResults.style.display = "none";
        nextBtn.style.display = "none";

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

    let humanScore = 0;
    let computerScore = 0;

    // const roundResults = document.querySelectorAll("#results")[0]; does the same thing
    const roundResults = document.querySelector("body > #results");

    const runningScore = document.querySelector("body > #runningScore");
    runningScore.innerText = `Your score: ${humanScore}\nComputer score: ${computerScore}`;

    const choices = document.querySelectorAll(".choices");
    for (const choice of choices) {
        choice.addEventListener("click", () => playRound(`${choice.id}`, getComputerChoice()));
    }



    function playRound(humanChoice, computerChoice) {
    
        if (humanScore < 5 || computerScore < 5) {
            if ((humanChoice === 'rock' && computerChoice === 'paper') ||
                (humanChoice === 'paper' && computerChoice === 'scissors') ||
                (humanChoice === 'scissors' && computerChoice === 'rock')) {
            
                roundResults.textContent = `You lose this round!\n
                You chose ${humanChoice}, and the computer chose ${computerChoice}.
                Unfortunately, ${humanChoice} loses to ${computerChoice}.`;
                computerScore++
    
            } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
            
                roundResults.textContent = `You win this round!\n
                You chose ${humanChoice}, and the computer chose ${computerChoice}.
                ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice}!`;
                humanScore++
    
            } else {
    
                roundResults.textContent = `It's a tie! You both chose ${computerChoice}.`;
            }
        }

        
        runningScore.innerText = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
        toggleChoicesDisplay(false);


        if (humanScore === 5) {
            
            roundResults.textContent = `You won the game!\nYou reached 5 points first.\n
            You won by ${humanScore-computerScore} point(s).`;
            document.body.removeChild(document.querySelector("body > #next"));

        } else if (computerScore === 5) {

            roundResults.textContent = `You lost the game!\nThe computer reached 5 points first.\n
            You lost by ${computerScore-humanScore} point(s).`
            document.body.removeChild(document.querySelector("body > #next"));
            
        }
    }
    
}
