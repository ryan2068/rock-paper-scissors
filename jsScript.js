const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const body = document.querySelector('body')
const divResults = document.querySelector('#result') 
const divCount = document.querySelector('#rndCount')
const divPlayerWs = document.querySelector('#playerWs')
const divcompWs = document.querySelector('#compWs')
const divGameWinnerPlayer = document.querySelector('#gameWinnerPlayer')
const divGameWinnerComp = document.querySelector('#gameWinnerComp')

buttonRock.addEventListener('click', () => {
  playerSelection = 'rock'
  game()
});
buttonPaper.addEventListener('click', () => {
  playerSelection = 'paper'
  game()
})
buttonScissors.addEventListener('click', () => {
  playerSelection = 'scissors'
  game()
})



















let humanwins = 0
let compwins = 0

let counter = 0;
   
function game() {
  function getComputerChoice() {
    rps = Math.floor(Math.random()* 3 + 1)
    if (rps == 1) {
        return ("rock")
    }
      else if (rps == 2) {
        return ("paper")
      }
      else if (rps == 3) {
        return ("scissors")
      }
  }
  
  
  
  
  function playRound(playerSelection, computerSelection) {
    console.log(`computer chose:  ${computerSelection}`)
    console.log(`player chose: ${playerSelection}`)  
    
    if (playerSelection === computerSelection) {
      counter++
      return "Its a draw"
    }
  
    if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        counter++
        compwins++
        return "The computer wins this round!"
      }
      else {
        counter++
        humanwins++
        return "You win this round!"
      } 
    }
    else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        counter++
        compwins++
        return "The computer wins this round!"
      }
      else {
        counter++
        humanwins++
        return "You win this round!"
      }
      }
    else if (playerSelection == "scissors") {
      if (computerSelection == "paper") {
        counter++
        compwins++
        return "The computer wins this round!"
      }
      else {
        humanwins++
        counter++
        return "You win this round!"
      }
      }
  }   
  
  
  
 // let playerSelection = "rock"
  let computerSelection = getComputerChoice()
  playerSelection = playerSelection.toLowerCase()
  
  divResults.textContent = (playRound(playerSelection, computerSelection))
  rndCount.textContent = (`You are on round: ${counter}`)
  
  divPlayerWs.textContent = (`players wins = ${humanwins}`)
  divcompWs.textContent = (`computers wins = ${compwins}`)
  if (counter == 5 && compwins < humanwins) {
    divGameWinnerPlayer.textContent = ("The player has won best out of 5!")}
  else if (counter == 5 && compwins > humanwins) {
    divGameWinnerComp.textContent = ("The computer has won best out of 5!")
    }
  

}



  


