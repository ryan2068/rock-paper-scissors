






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
        return "The computer wins this round!"
      }
      else {
        counter++
        return "You win this round!"
      } 
    }
    else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        counter++
        return "The computer wins this round!"
      }
      else {
        counter++
        return "You win this round!"
      }
      }
    else if (playerSelection == "scissors") {
      if (computerSelection == "paper") {
        counter++
        return "The computer wins this round!"
      }
      }
  }   
  
  getComputerChoice()
  
  let playerSelection = prompt("Rock Paper Or scissors?").toLowerCase
  let computerSelection = getComputerChoice()
  
  
  console.log(playRound(playerSelection, computerSelection))
  console.log(`You are on round: ${counter}`)
}

game()
game()
game()
game()
game()
  


