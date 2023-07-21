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

const playerSelection = "paper"
const computerSelection = getComputerChoice()
console.log(`computer chose:  ${computerSelection}`)
console.log(`player chose: ${playerSelection}`)


let counter = 1;
console.log(playRound(playerSelection, computerSelection))


function playRound(playerSelection, computerSelection) {
    
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
   
  console.log(counter)
   
   

