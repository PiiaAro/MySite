const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
const randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

const randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
const randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
  player1 = prompt("Anna pelaajan 1 nimi");
  player2 = prompt("Anna pelaajan 2 nimi");

  document.querySelector("p.Player1").innerHTML = player1;

  document.querySelector("p.Player2").innerHTML = player2;
}

// Function who wins
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Tasapeli!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Pelaaja 2 voittaa!";
} else {
  document.querySelector("h1").innerHTML = "Pelaaja 1 voittaa!";
}
