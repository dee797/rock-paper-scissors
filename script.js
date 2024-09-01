function getHumanChoice() {
    const strings = ["rock", "paper", "scissors"];
    var userInput = parseInt(prompt("Enter the number for one of the choices below:\n1. Rock\n2. Paper\n3. Scissors"));

    while (isNaN(userInput)) {
        
        alert("Invalid entry. Please enter a number from 1 to 3.")
        var userInput = parseInt(prompt("Enter the number of one of the choices below:\n1. Rock\n2. Paper\n3. Scissors"))
    }
    
    console.log(strings[userInput-1])
    return strings[userInput-1]
}


function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()* 3);
    return strings[randomNum]
}

//test
getHumanChoice();