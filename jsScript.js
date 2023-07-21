function getComputerChoice() {
    rps = Math.floor(Math.random()* 3 + 1)
    if (rps == 1) {
        return ("Rock")
    }
      else if (rps == 2) {
        return ("Paper")
      }
      else if (rps == 3) {
        return ("Scissors")
      }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Its a draw"
    }
  
    if (playerSelection == "Rock") {
      if (computerSelection == "Paper") {
        return "The computer wins this round!"
      }
      else {
        return "You win this round!"
      } 
    }
    else if (playerSelection == "Paper") {
      if (computerSelection == "Scissors") {
        return "The computer wins this round!"
      }
      else {
        return "You win this round!"
      }
      }
    else if (playerSelection == "Scissors") {
      if (computerSelection == "Paper") {
      return "The computer wins this round!"
      }
      }
}   
   
  
   
   

const playerSelection = "Paper"
const computerSelection = getComputerChoice()
console.log(`computer chose:  ${computerSelection}`)
console.log(`player chose: ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection))