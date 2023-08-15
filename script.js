function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());

let playerScore = 0;
    computerScore =0;

function playRound(playerSelection, computerSelection) {

    if (computerSelection === 'rock'){
        console.log('No result, rock doesnt beat rock');
    }
    else if (computerSelection === 'paper'){
        console.log('You Lose !, paper beats rock.');
        computerScore += 1;
    }
    else {
        console.log('You Win !, Rock beats Scissor.')
        playerScore += 1;
    }
}

function game () {

    for (let i = 0; i <= 4; i++){

        const playerSelection = prompt("Choose Your Weapon Player");
        computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

    }

    if (playerScore < computerScore){
        alert("Computer Wins !")
    }else {
        alert("You Win !")
    }
}
game();
