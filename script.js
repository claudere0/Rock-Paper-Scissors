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
    normalizedHumanChoise = humanChoice.toLowerCase();
    // ((normalizedHumanChoise === "rock" && computerChoice === "rock") || (normalizedHumanChoise === "paper" && computerChoice === "paper") || (normalizedHumanChoise === "scissors" && computerChoice === "scissors")) old condition
    if (normalizedHumanChoise === computerChoice){
        return "Tie"
    } else if (normalizedHumanChoise === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats Rock"
    } else if (normalizedHumanChoise === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors"
    } else if (normalizedHumanChoise === "paper" && computerChoice === "rock") {
        return "You win! Paper beats Rock"
    } else if (normalizedHumanChoise === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats Paper"
    } else if (normalizedHumanChoise === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats Scissors"
    } else if (normalizedHumanChoise === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats Paper"
    } else {
        return "something went wrong, try to write properly! "
    }
}

let = humanScore = 0;
let = computerScore = 0;

// console.log(getComputerChoise());
// console.log(getHumanChoice());

let computerChoise = getComputerChoise();
let humanCoise = getHumanChoice();
console.log("Computers choise is", computerChoise);
console.log(playRound(humanCoise, computerChoise));

// function getRandom() {
//     return Math.random();
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// }

// console.log(getRandom());
// console.log(getRandomArbitrary(1,10));
// console.log(getRandomInt(1,100));