/* Computer Choice */
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

/* Human Choice */
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

/* Score */
let humanScore = 0;
let computerScore = 0;

/* Play Round */
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") || 
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else {
    computerScore++;
    alert(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}