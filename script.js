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


// Play 5 rounds of the game
function playGame(){
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;

    

    // Function for a singular round of the game
    function playRound(userChoice, computerChoice){
        let userPlay = userChoice.toLowerCase();
        let computerPlay = computerChoice.toLowerCase();
    
        console.log(`Computer chose ${computerPlay} || User chose ${userPlay}`);
        if (userPlay == computerPlay){
            console.log("TIE!");  
        } else if (userPlay == "rock" && computerPlay == "paper"){
            console.log("Computer Wins");
            computerScore++;
        } else if (userPlay == "scissors" && computerPlay == "rock"){
            console.log("Computer Wins");
            computerScore++;
        } else if (userPlay == "paper" && computerPlay == "scissors"){
            console.log("Computer Wins");
            computerScore++;
        } else if (userPlay != "paper" & userPlay != "scissors" & userPlay != "rock"){
            console.log("Invalid Response ")
        } else {
            console.log("User Wins");
            userScore++;
        }
    }
    
    // Play 5 rounds of the game
    while (rounds < 5){
        let userSelect = getUserChoice();
        let computerSelect = getComputerChoice();
        playRound(userSelect, computerSelect);
        console.log(`Computer: ${computerScore} || User: ${userScore}`);
        rounds++;
    }
}

playGame()

// Get the computer choice via random selection
// Get the user input choice

// IF computer beats user choice
    // Lose
// ELSE IF user beats computer chocie
    // Win
// ELSE 
    // Tie
    // Replay
