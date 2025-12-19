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

function getHumanChoice() {

}

// console.log(getComputerChoise());



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