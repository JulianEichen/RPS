/* We want to play RPS against the computer */

let play = true;

function computerPlay() {
    let roboHand = ['R', 'P', 'S'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];
    return roboDraw;
}

/*
while (play) {
    let roboHand = ['R', 'P', 'S'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];

    let playerDraw = prompt("[R]ock/[P]aper/[S]cissors?", "R");

    if (playerDraw == 'R' && roboDraw == 'P') {
        console.log("The AI drew PAPER, YOU LOSE!");
    } else if (playerDraw == 'R' && roboDraw == 'S') {
        console.log("The AI drew SCISSORS, YOU WIN!");
    } else if (playerDraw == 'P' && roboDraw == 'S') {
        console.log("The AI drew SCISSORS, YOU LOSE!");
    } else if (playerDraw == 'P' && roboDraw == 'R') {
        console.log("The AI drew ROCK, YOU WIN!");
    } else if (playerDraw == 'S' && roboDraw == 'P') {
        console.log("The AI drew PAPER, YOU WIN!");
    } else if (playerDraw == 'S' && roboDraw == 'R') {
        console.log("The AI drew ROCK, YOU LOSE!");
    } else if (playerDraw == roboDraw) {
        console.log(`The AI drew ${roboDraw}, DRAW!`);
    } else {
        console.log("OH NO!");
    }

    let again = prompt("Do you want to play again? Y/N", "N");
    if (again == "N"){
        play = false;
    }
}
*/
// console.log("Thanks for palying.");

function playRound(playerDraw){
    const status = document.querySelector('#status');
    
    // compute robot play
    let roboHand = ['R', 'P', 'S'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];

    if (playerDraw == 'R' && roboDraw == 'P') {
        status.textContent = "The AI drew PAPER, YOU LOSE!";
    } else if (playerDraw == 'R' && roboDraw == 'S') {
        status.textContent = "The AI drew SCISSORS, YOU WIN!";
    } else if (playerDraw == 'P' && roboDraw == 'S') {
        status.textContent = "The AI drew SCISSORS, YOU LOSE!";
    } else if (playerDraw == 'P' && roboDraw == 'R') {
        status.textContent = "The AI drew ROCK, YOU WIN!";
    } else if (playerDraw == 'S' && roboDraw == 'P') {
        status.textContent = "The AI drew PAPER, YOU WIN!";
    } else if (playerDraw == 'S' && roboDraw == 'R') {
        status.textContent = "The AI drew ROCK, YOU LOSE!";
    } else if (playerDraw == roboDraw) {
        status.textContent = `The AI drew  ${roboDraw}, DRAW!`;
    } else {
        status.textContent = "OH NO!";
    }


}

const container = document.querySelector('#container');

// Eventlisteners
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        playRound(button.id);
    })
})





