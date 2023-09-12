const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");
let player;
let computer;
let result;
let scoreText = document.querySelector(".scoreText")

let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};

updateScore();

choiceBtns.forEach(button => button.addEventListener('click', () => {
    
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    if(checkWinner() === "Draw!"){
        score.tie += 1;
    } else if(checkWinner() === "Player Won!"){
        score.win += 1;  
    } else if(checkWinner() === "Computer Won!"){
        score.lose += 1;  
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
}))

function computerTurn(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors"
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!"
    } else if(computer == "Rock"){
        return (player == "Paper") ? "Player Won!" : "Computer Won!"
    } else if(computer == "Paper"){
        return (player == "Scissors") ? "Player Won!" : "Computer Won!"
    } else if(computer == "Scissors"){
        return (player == "Rock") ? "Player Won!" : "Computer Won!"
    }
    
    
}

function updateScore(){
        scoreText.textContent = `Wins: ${score.win}, Ties: ${score.tie}, Losses: ${score.lose}.`
}