let randomNum;
// function GenerateRandom() {
randomNum = Math.ceil(Math.random() * 20);
// }

let score = 20;
let highScore = 0;

const userInputHTML = document.querySelector('#userInput');
const guessNumTextHTML = document.querySelector('.guessNumText');
const scoreHTML = document.querySelector('.score');
const highscoreHTML = document.querySelector('.highScore');


function ristricInput() {
    const inputValue = userInputHTML.value;
    userInputHTML.value = inputValue.slice(0, 2);
}

function checkNum() {
    const userInputValue = parseInt(document.querySelector('#userInput').value);
    console.log(randomNum);
    if (userInputValue <= 20) {

        if (userInputValue != randomNum) {
            if (randomNum > userInputValue) {
                guessNumTextHTML.innerHTML = "you guess very low";
            } else {
                guessNumTextHTML.innerHTML = "you guess very high";

            }
            score--;
            updateSocreUI()
        }
        else if (userInputValue === randomNum) {
            guessNumTextHTML.innerHTML = 'Number Matched';
            highScore = score;
            updateSocreUI()
        }
    }
    else {
        guessNumTextHTML.innerHTML = 'Please select number between 1 to 20';
    }
}


function updateSocreUI() {

    scoreHTML.innerHTML = score;
    highscoreHTML.innerHTML = highScore;

}