function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  let computerChoice = "Rock";
  if (randomInt === 1) {
    computerChoice = "Paper";
  } else if (randomInt === 2) {
    computerChoice = "Scissors";
  } 
  return computerChoice;
} 

function getHumanChoice() {
  let rightChoice = false;
  let humanChoice;

  while (!rightChoice) {
    humanChoice = prompt("What's your choice? (Choose between Rock, Paper and Scissors. Five rounds total.)");
    let humanChoiceUpper = humanChoice.toUpperCase();
    if (humanChoiceUpper === "ROCK" || humanChoiceUpper === "PAPER" || humanChoiceUpper === "SCISSORS") {
      rightChoice = true;
    } 
  }

  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

  return humanChoice;
}