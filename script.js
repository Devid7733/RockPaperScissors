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
function playRound(computerChoice, humanChoice) {
  const result = document.querySelector("#result");
  const resultText = document.querySelector("#result p");
    if (computerChoice == humanChoice) {
      resultText.textContent = `Tie! ${humanChoice} tied ${computerChoice}`;
    } else if (
      (computerChoice == "rock" && humanChoice == "scissors") ||
      (computerChoice == "paper" && humanChoice == "rock") ||
      (computerChoice == "scissors" && humanChoice == "paper")
    ) {
      resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else {
      resultText.textContent = `Congratualtion you win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
    if (humanScore == 5 || computerScore == 5) {
      const resultScore = document.createElement("p");
      resultScore.textContent = `Total Score \n Computer Score: ${computerScore} \n Your Score: ${humanScore} `;
      result.appendChild(resultScore);
      humanScore = computerScore = 0;
    }
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound(getComputerChoice(), "rock");
});
paper.addEventListener("click", () => {
  playRound(getComputerChoice(), "paper");
});
scissors.addEventListener("click", () => {
  playRound(getComputerChoice(), "scissors");
});
