humanScore = 0;
computerScore = 0;

let options = document.querySelectorAll('.choice');
let textArea = document.querySelector('.result');
let pScore = document.querySelector('#pScore');
let cScore = document.querySelector('#cScore');

options.forEach((option) => {
    option.addEventListener('click',() => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(option.textContent, getComputerChoice());
        }

        if (humanScore === 5) {
            textArea.textContent = "You won!";
        } else if (computerScore === 5) {
            textArea.textContent = "You Lost!";
        }
        
    });
});

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
            console.log("It's a draw!");
        } else if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                msg = "You Win! Rock beats Scissors";
                console.log("You Win! Rock beats Scissors");
                humanScore++;
                pScore.textContent = humanScore;
            } else {
                msg = "You Lose! Scissors beats Rock";
                console.log("You Lose! Scissors beats Rock");
                computerScore++;
                cScore.textContent = computerScore;
            }
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                msg = "You Win! Paper beats Rock";
                console.log("You Win! Paper beats Rock");
                humanScore++;
                pScore.textContent = humanScore;
            }  else {
                msg = "You Lose! Scissors beats Paper";
                console.log("You Lose! Scissors beats Paper");
                computerScore++;
                cScore.textContent = computerScore;
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'paper') {
                msg = "You win! Scissors beats Paper";
                console.log("You win! Scissors beats Paper");
                humanScore++;
                pScore.textContent = humanScore;
            } else {
                msg = "You Lose! Rock beats Scissors";
                console.log("You Lose! Rock beats Scissors");
                computerScore++;
                cScore.textContent = computerScore;
            }
        }
        textArea.textContent = msg;
    }




