let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let number = Math.random();
  let result = "";
  if (number > 0 && number <= 0.3333) {
    result = "rock";
  } else if (number > 0.3333 && number < 0.6666) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}
function getHumanChoice() {
  let humanChoice = prompt("Pick rock paper or scissors: ");
  return humanChoice.toLowerCase();
}
function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) {
    console.log(`Tie! ${humanChoice} tied ${computerChoice}`);
    alert(`Tie! ${humanChoice} tied ${computerChoice}`);
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else {
    console.log(
      `Congratualtion you win! ${humanChoice} beats ${computerChoice}`
    );
    alert(`Congratualtion you win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
  console.log(
    `Total Score \n Computer Score: ${computerScore} \n Your Score: ${humanScore} `
  );
}
function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Match ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  }
  if (humanScore > computerScore) {
    console.log(
      `Cogratulations! After 5 rounds your Score:${humanScore} beat computer Score:${computerScore} `
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Try Again! After 5 rounds your Score:${humanScore} lost to computer Score:${computerScore} `
    );
  } else {
    console.log(
      `Not bad! After 5 rounds your Score:${humanScore} tied to computer Score:${computerScore} `
    );
  }
}
playGame();
