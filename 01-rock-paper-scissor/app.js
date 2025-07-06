"use strict";
let score = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// score
// document.querySelector(
//   ".js-score"
// ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
updateScoreElement();
// // NULL VALUE CHECK HUMBLED ME
// if (score === null || score === undefined) {
//   score = resetScores();
// }
function resetScores() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem("scores", JSON.stringify(score));
  updateScoreElement();
  return score;
  // alert(
  //   `Scores have been reset to Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  // );
}

// console.log(localStorage.getItem("scores"));

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "" || "no-result";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("scores", JSON.stringify(score));
  // console.log(localStorage.setItem("scores", JSON.stringify(score)));
  // document.querySelector("js-result").innerHTML = result;
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;
  // document.querySelector(
  //   ".js-moves"
  // ).innerHTML = `You <img class = "move-icon" src="assets/${playerMove}-emoji.png/> - <img class = "move-icon" src="assets/${computerMove}-emoji.png/>`;
  document.querySelector(".js-moves").innerHTML = `
          Player: <img class="move-icon" src="assets/${playerMove}-emoji.png" />
          Computer: <img class="move-icon" src="assets/${computerMove}-emoji.png" />
        `;

  // alert(
  //   `  You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  //    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  // );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
