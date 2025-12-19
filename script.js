function getComputerChoise() {
    let choise = Math.floor(Math.random()*3)+1;
    if (choise === 1) {
        return "Rock";
    } else if (choise === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoise());