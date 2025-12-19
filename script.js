function getComputerChoise() {
    let choise = Math.floor(Math.random()*3)+1;
    if (choise === 1) {
        return "rock";
    } else if (choise === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: rock / paper / scissors", "")
    return choice;
}

function playRound(humanChoice, computerChoice) {
    function showResults() {
        console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    }

    normalizedHumanChoise = humanChoice.toLowerCase();
    // ((normalizedHumanChoise === "rock" && computerChoice === "rock") || (normalizedHumanChoise === "paper" && computerChoice === "paper") || (normalizedHumanChoise === "scissors" && computerChoice === "scissors")) old condition
    if (normalizedHumanChoise === computerChoice){
        showResults();
        return "Tie"
    } else if (normalizedHumanChoise === "rock" && computerChoice === "paper") {
        showResults();
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (normalizedHumanChoise === "rock" && computerChoice === "scissors") {
        showResults();
        humanScore++;
        return "You win! Rock beats Scissors"
    } else if (normalizedHumanChoise === "paper" && computerChoice === "rock") {
        showResults();
        humanScore++;
        return "You win! Paper beats Rock"
    } else if (normalizedHumanChoise === "paper" && computerChoice === "scissors") {
        showResults();
        computerScore++;
        return "You lose! Scissors beats Paper"
    } else if (normalizedHumanChoise === "scissors" && computerChoice === "rock") {
        showResults();
        computerScore++;
        return "You lose! Rock beats Scissors"
    } else if (normalizedHumanChoise === "scissors" && computerChoice === "paper") {
        showResults();
        humanScore++;
        return "You win! Scissors beats Paper"
    } else {
        showResults();
        return "something went wrong, try to write properly! "
    }
}

let = humanScore = 0;
let = computerScore = 0;

// console.log(getComputerChoise());
// console.log(getHumanChoice());



const computerSelection = getComputerChoise();
const humanSelection = getHumanChoice();
console.log("Computers choise is", computerSelection);
console.log(playRound(humanSelection, computerSelection));

console.log(`Human: ${humanScore} | Computer: ${computerScore}`);