/* We want to play RPS against the computer */

function playRound(playerDraw){
    const status = document.querySelector('#status');
    
    // compute robot play
    let roboHand = ['Rock', 'Paper', 'Scissors'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];

    if (playerDraw == 'Rock' && roboDraw == 'Paper') {
        status.textContent = "The AI drew PAPER, YOU LOSE!";
    } else if (playerDraw == 'Rock' && roboDraw == 'Scissors') {
        status.textContent = "The AI drew SCISSORS, YOU WIN!";
    } else if (playerDraw == 'Paper' && roboDraw == 'Scissors') {
        status.textContent = "The AI drew SCISSORS, YOU LOSE!";
    } else if (playerDraw == 'Paper' && roboDraw == 'Rock') {
        status.textContent = "The AI drew ROCK, YOU WIN!";
    } else if (playerDraw == 'Scissors' && roboDraw == 'Paper') {
        status.textContent = "The AI drew PAPER, YOU WIN!";
    } else if (playerDraw == 'Scissors' && roboDraw == 'Rock') {
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





