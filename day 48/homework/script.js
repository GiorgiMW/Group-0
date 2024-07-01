const computer = document.querySelector("#computer");
const you = document.querySelector("#you");
const button = document.querySelector(".btn");
const image = document.querySelector("img");
const whoWin = document.querySelector("#win");
const computerscr = document.querySelector("#scr2");
const youscr = document.querySelector("#scr1");
let computerScore = 0;
let userScore = 0;

image.addEventListener("click", function () {
  let userRolls = Math.floor(Math.random() * 6) + 1;
  let computerRolls = Math.floor(Math.random() * 6) + 1;
  you.textContent = "You: " + userRolls;
  computer.textContent = "Computer: " + computerRolls;
  if (userRolls > computerRolls) {
    userScore++;
    whoWin.textContent = "You Won!";
  } else if (computerRolls > userRolls) {
    computerScore++;
    whoWin.textContent = "Computer won!";
  }
  youscr.textContent = "Your Score: " + userScore;
  computerscr.textContent = "Computer Score: " + computerScore;
});
button.addEventListener("click", function () {
  you.textContent = "You " + 0;
  computer.textContent = "Computer " + 0;
  whoWin.textContent = "";
  computerscr.textContent = "Computer Score: ";
  youscr.textContent = "Your Score: ";
  computerScore = 0;
  userScore = 0;
});
