humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    let min = 1;
    let max = 3;
    let choice = Math.floor(Math.random() * (max - min+1) + min);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    pChoice = prompt("Rock, Paper, or Scissors?");
    return pChoice;
}

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        let msg;

        if (humanChoice === computerChoice) {
            msg = "It's a draw!";
            //console.log("It's a draw!");
        } else if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                msg = "You Win! Rock beats Scissors";
                //console.log("You Win! Rock beats Scissors");
                humanScore++;
            } else {
                msg = "You Lose! Scissors beats Rock";
                //console.log("You Lose! Scissors beats Rock");
                computerScore++;
            }
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                msg = "You Win! Paper beats Rock";
                //console.log("You Win! Paper beats Rock");
                humanScore++;
            }  else {
                msg = "You Lose! Scissors beats Paper";
                //console.log("You Lose! Scissors beats Paper");
                computerScore++;
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'paper') {
                msg = "You win! Scissors beats Paper";
                //console.log("You win! Scissors beats Paper");
                humanScore++;
            } else {
                msg = "You Lose! Rock beats Scissors";
                //console.log("You Lose! Rock beats Scissors");
                computerScore++;
            }
        }
        return msg;
    }

/** 
function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerInput = getHumanChoice();
        let result = playRound(playerInput, getComputerChoice());
        console.log(result);
    }

    if (humanScore > computerScore) {
        console.log("You win the best of 5!");
    } else if (computerScore > humanScore) {
        console.log("You lose the best of 5!");
    } else {
        console.log("Best of 5 is a draw!");
    }
    console.log(`Computer: ${computerScore} Player: ${humanScore}`);
}*/


//playGame();




