// Get the randomised computer choice
function getComputerChoice(){
    let selection = Math.random() * 100;
    let choice = " "

    if (selection < 33.33){
        choice = "rock";
    } else if (selection < 66.66){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}


// Get the user input choice
function getUserChoice(){
    let user_choice = prompt("Rock, Paper or Scissors?");
    return user_choice;
}

let userScore = 0;
let computerScore = 0;
let rounds = 0;



// Function for a singular round of the game
function playRound(userPlay, computerPlay){
    const resultDiv = document.getElementById("result");
    let resultText = "";

    if (userPlay == computerPlay){
        resultText = "TIE!";
    } else if (
        (userPlay == "rock" && computerPlay == "paper")||
        (userPlay == "scissors" && computerPlay == "rock")||
        (userPlay == "paper" && computerPlay == "scissors")
    ) {
        resultText = "Computer Wins";
        computerScore++;
    } else {
        resultText = "User Wins";
        userScore++;
    }

    // Display result
    resultDiv.innerHTML = `
        <p>Computer chose <strong>${computerPlay}</strong> || User chose <strong>${userPlay}</strong><p>
        <p>${resultText}</p>
        <p>Computer: ${computerScore} || User: ${userScore}</p>
        
    `;

    rounds++;

    if (rounds == 5){
        announceWinner();
        resetGame()
    }
}
    

function announceWinner() {
    // Announce Winner
    const resultDiv = document.getElementById("result");
    if (computerScore > userScore){
        resultDiv.innerHTML += `<p>Computer Wins the Game ${computerScore} - ${userScore}</p>`;
    
    } else if (computerScore == userScore){
        resultDiv.innerHTML += `<p>The game ends in a tie! ${computerScore} - ${userScore}</p>`;
    } else {
        resultDiv.innerHTML += `<p>User Wins the Game ${userScore} - ${computerScore}</p>`;
        
    }

}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    rounds = 0;
}


// Add event listeners to the buttons
document.getElementById("rockbtn").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.getElementById("paperbtn").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissorsbtn").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});