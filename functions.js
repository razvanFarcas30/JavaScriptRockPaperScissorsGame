var stringNames = ["rock", "paper", "scissors"];
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var ties = document.getElementById("ties");
var win_counter = 0;
var loss_counter = 0;
var tie_counter = 0;
function moves(player) {
  var randomDecimal = Math.random();
  var randomNumber = Math.floor(randomDecimal * 3);
  computer = stringNames[randomNumber];
  document.querySelector(".moves").innerHTML =
    "You" +
    '<img src="' +
    player +
    '-emoji.png" class="emoji-img" />' +
    '<img src="' +
    computer +
    '-emoji.png" class="emoji-img" />' +
    "Computer";
  var result = document.getElementById("result_p");
  if (player == computer) {
    result.innerHTML = "It's a tie";
    tie_counter++;
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "scissors" && computer == "rock") ||
    (player == "paper" && computer == "scissors")
  ) {
    result.innerHTML = "You lost";
    loss_counter++;
  } else {
    result.innerHTML = "You won";
    win_counter++;
  }
  ties.innerHTML = tie_counter;
  losses.innerHTML = loss_counter;
  wins.innerHTML = win_counter;
}
function reset() {
  ties.innerHTML = 0;
  losses.innerHTML = 0;
  wins.innerHTML = 0;
}
